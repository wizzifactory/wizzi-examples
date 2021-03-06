/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\wizzi-studio\.wizzi\ittf\server\webpacks\home\src\components\DemoButton.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/find';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import PlayCircleOutlineIcon from 'material-ui-icons/PlayCircleOutline';
import { kebabCase } from '../utils/helpers';
import { demoComponentsTree } from './files';
function DemoButton(props) {
    const currentRoute = props.routes[props.routes.length - 1];
    if (!currentRoute.componentAPI) {
        return null;
    }
    const item = find(demoComponentsTree, (node) => {
        return find(node.components, (component) => {
                return component === currentRoute.componentAPI.name);
            });
    });
    if (!item) {
        return null;
    }
    return  (
            <IconButton contrast component={Link} to={`/component-demos/${kebabCase(item.demo.name)}`}>
                <PlayCircleOutlineIcon>
                </PlayCircleOutlineIcon>
            
            </IconButton>
        )
    ;
}
DemoButton.propTypes = {
    routes: PropTypes.array.isRequired
};
export default DemoButton;
