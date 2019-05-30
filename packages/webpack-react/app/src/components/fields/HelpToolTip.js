/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\components\fields\HelpToolTip.js.ittf
*/
'use strict';
// Credits: https://github.com/redgeoff/mson-react/tree/master/src/fields/help-tool-tip.js
// TODO: make full width of field include right margin if there is help?
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '../widgets/Icon';
class HelpToolTip extends React.Component {
    render() {
        const {
            help
        } = this.props;
        // Note: we use disableTouchListener as otherwise the user needs to press and hold before the
        // tooltip appears, something that is not intuitive. With this configuration, the user can just
        // click the button to view the tooltip.
        return  (
                <Tooltip disableTouchListener title={help}>
                    <IconButton aria-label="Help">
                        <Icon icon="HelpOutline">
                        </Icon>
                    
                    </IconButton>
                
                </Tooltip>
            )
        ;
    }
}
export default HelpToolTip;
