/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\components\mui_stop_see_common\grid.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';

import React, { Component, PropTypes } from 'react';
class Row extends Component {
    constructor() {
        super();
    }
    render() {
        const { children } = this.props;
        return  (
                <div style={this.getStyle()}>
                    <div style={{
                        display: "table", 
                        content: " "
                    }}>
                    </div>
                
                {children}<div style={{
                        clear: "both"
                    }}>
                    </div>
                
                </div>
            )
        ;
    }
    getStyle(span) {
        return {
                marginLeft: 5, 
                marginRight: 5
            };
    }
}
Row.propTypes = {};
export default Row;
class Col extends Component {
    constructor() {
        super();
    }
    render() {
        const { span, children } = this.props;
        return  (
                <div style={this.getStyle(span)}>
                {children}</div>
            )
        ;
    }
    getStyle(span) {
        return {
                boxSizing: "border-box", 
                position: "relative", 
                width: (span / 12 * 100) + '%', 
                float: "left", 
                paddingLeft: 10, 
                paddingRight: 10, 
                minHeight: 1
            };
    }
}
Col.propTypes = {
    span: PropTypes.number.isRequired
};

module.exports = {
    Row: Row,
    Col: Col
};
