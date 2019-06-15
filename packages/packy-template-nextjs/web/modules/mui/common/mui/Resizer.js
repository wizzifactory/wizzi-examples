/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\common\mui\Resizer.js.ittf
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
class Resizer extends React.Component {
    render() {
        var {className, onClick, onDoubleClick, onMouseDown, onTouchEnd, onTouchStart, prefixer, resizerClassName, split, style} = this.props;
        var classes = [
            resizerClassName, 
            split, 
            className
        ];
        return  (
                <span className={classes.join(' ')} style={prefixer.prefix(style) || {}} onMouseDown={(event) =>
                    onMouseDown(event)} onTouchStart={(event) => {
                    event.preventDefault();
                    onTouchStart(event);
                }} onTouchEnd={(event) => {
                    event.preventDefault();
                    onTouchEnd(event);
                }} onClick={(event) => {
                    if (onClick) {
                        event.preventDefault();
                        onClick(event);
                    }
                }} onDoubleClick={(event) => {
                    if (onDoubleClick) {
                        event.preventDefault();
                        onDoubleClick(event);
                    }
                }}>
                </span>
            )
        ;
    }
}

Resizer.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onDoubleClick: PropTypes.func,
    onMouseDown: PropTypes.func.isRequired,
    onTouchStart: PropTypes.func.isRequired,
    onTouchEnd: PropTypes.func.isRequired,
    prefixer: PropTypes.instanceOf().isRequired
    ,
    split: PropTypes.oneOf([
        'vertical',
        'horizontal'
    ])
    ,
    style stylePropType: PropTypes.string,
    resizerClassName: PropTypes.string.isRequired
}

Resizer.defaultProps  = {
    prefixer: new Prefixer({ userAgent: USER_AGENT }),
    resizerClassName: 'Resizer'
}
Resizer.propTypes = {};
Resizer.defaultProps = {};
export default withStyles(styles)(Resizer);
