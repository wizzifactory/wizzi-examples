/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\components\fields\Icon.js.ittf
*/
'use strict';
// Credits: https://github.com/redgeoff/mson-react/tree/master/src/icon.js
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Note: we use font icons instead of SVG icons as this allows us to support any icon dynamically
// without adding all icons to the JS bundle. The MaterialUI icons are about 54KB which is
// substantially smaller than their SVG counterparts.
//
// import * as Icons from '@material-ui/icons';
import IconMui from '@material-ui/core/Icon';
import snakeCase from 'lodash/snakeCase';
class Icon extends React.Component {
    handleClick = (event) => {
        if (this.props.onClick) {
            this.props.onClick(event);
        }
    }
    toFontIconName(svgIconName) {
        // Convert to the font icon name so that we can use the SVG Icon names. This allows us to make
        // changes to this logic without changing the calling code.
        return snakeCase(svgIconName);
    }
    render() {
        const {
            className,
            icon
        } = this.props;
        const iconContents = icon ? this.toFontIconName(icon) : null;
        return  (
                <IconMui className={className} onClick={this.handleClick}>
                {iconContents}</IconMui>
            )
        ;
    }
}
export default Icon;
