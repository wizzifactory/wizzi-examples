/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\components\fields\CommonField.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from './FormControl';
import FormLabel from './FormLabel';
import HelpToolTip from './HelpToolTip';
class CommonField extends React.Component {
    render() {
        const {
            input, 
            err, 
            touched, 
            children, 
            label, 
            required, 
            fullWidth, 
            editable, 
            help, 
            hideLabelUI, 
            hideLabel, 
            useDisplayValue, 
            shrinkLabel, 
            inlineLabel, 
            marginBottom, 
            autoHideLabel
        } = this.props;
        let fld = null;
        let lbl = null;
        const isBlank = // FIXME
            false;
        const id = input.name;
        if (!hideLabelUI && !hideLabel && !autoHideLabel || label) {
            if (editable && !useDisplayValue && !inlineLabel) {
                lbl =  (
                    <InputLabel htmlFor={id} error={touched && err ? true : false} required={label && required} shrink={shrinkLabel}>
                    // If label is blank then don't show as required
                    {label}</InputLabel>
                )
                ;
            }
            else {
                // We display a non-breaking space when the label is empty so that CompositeFields, like the
                // ChainedSelectField, print all their display values on the same line.
                const labelText = label ? label : '\u00A0';
                lbl =  (
                    <FormLabel htmlFor={id} error={touched && err ? true : false} required={required && !useDisplayValue && editable} shrink={useDisplayValue || !editable || shrinkLabel}>
                    {labelText}</FormLabel>
                )
                ;
                if (!inlineLabel) {
                    // We wrap the label in a div tag so that the proceeding display value appears on a
                    // different line
                    lbl =  (
                        <div>
                        {lbl}</div>
                    )
                    ;
                }
            }
        }
        const firstErr = err;
        fld =  (
            <span>
            {lbl}{children}{
                help && editable ?  (
                        <HelpToolTip help={help}>
                        </HelpToolTip>
                    )
                 : ''
            }{
                touched && err ?  (
                        <FormHelperText error>
                        {firstErr}</FormHelperText>
                    )
                 : null
            }</span>
        )
        ;
        if (editable || !isBlank) {
            return  (
                    <FormControl fullWidth={fullWidth} marginBottom={marginBottom}>
                    {fld}</FormControl>
                )
            ;
        }
        else {
            return null;
        }
    }
}
export default CommonField;
