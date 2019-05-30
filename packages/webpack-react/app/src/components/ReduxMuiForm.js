/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\components\ReduxMuiForm.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from './fields/TextField';
import SwitchField from './fields/SwitchField';
import {DatePicker} from "@material-ui/pickers";
import Slider from '@material-ui/lab/Slider';
import ReactSelect from 'react-select';
const RfAutocomplete = (props) => {
    // log 'RfAutocomplete.props', props
    const {
        input, 
        label, 
        classes, 
        meta: {
            touched, 
            error
        }, 
        children, 
        ...rest
    } = props;
    return  (
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor={props.name}>
                {props.label}</InputLabel>
            
                <ReactSelect {...input} {...rest} value={input.value} onChange={(event) => {
                    console.log('ReactSelect.onChange.event.target', event.target);
                    input.onChange(event.target.value);
                }}>
                </ReactSelect>
            
                <FormHelperText>
                {touched && error}</FormHelperText>
            
            </FormControl>
        )
    ;
};
const renderCheckboxControl = (props) => {
    const {
        input, 
        label, 
        ...rest
    } = props;
    return  (
            <Checkbox checked={input.value ? true : false} onChange={input.onChange} value={input.value} {...rest}>
            </Checkbox>
        )
    ;
};
const RfCheckbox = (props) => {
    console.log('RfCheckbox.props', props);
    return  (
            <FormControlLabel className={props.classes.formControl} label={props.label} control={renderCheckboxControl(props)}>
            </FormControlLabel>
        )
    ;
};
const RfDatePicker = (props) => {
    // log 'RfDatePicker.props', props
    const {
        input, 
        label, 
        meta: { touched, error }, 
        ...rest
    } = props;
    return  (
            <DatePicker label={label} value={input.value} helperText={touched && error} {...input} {...rest} animateYearScrolling>
            </DatePicker>
        )
    ;
};
const RfKeyboardDatePicker = (props) => {
    // log 'RfKeyboardDatePicker.props', props
    const {
        input, 
        label, 
        classes, 
        meta: { touched, error }, 
        ...rest
    } = props;
    return  (
            <KeyboardDatePicker className={classes.formControl} label={label} value={input.value} helperText={touched && error} {...input} {...rest} animateYearScrolling>
            </KeyboardDatePicker>
        )
    ;
};
const RfRadioGroup = (props) => {
    console.log('RfRadioGroup.props', props);
    const {
        input, 
        label, 
        classes, 
        children, 
        ...rest
    } = props;
    return  (
            <FormControl className={classes.formControl} component="fieldset">
                <FormLabel component="legend">
                {label}</FormLabel>
            
                <RadioGroup {...input} {...rest} aria-label={label} value={input.value} children={children} onChange={(event, value) =>
                    input.onChange(value)}>
                </RadioGroup>
            
            </FormControl>
        )
    ;
};
const RfSelect = (props) => {
    // log 'RfSelect.props', props
    const {
        input, 
        label, 
        classes, 
        meta: {
            touched, 
            error
        }, 
        children, 
        ...rest
    } = props;
    return  (
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor={props.name}>
                {props.label}</InputLabel>
            
                <Select {...input} {...rest} value={input.value} onChange={(event) => {
                    console.log('Select.onChange.event.target', event.target);
                    input.onChange(event.target.value);
                }} children={children}>
                </Select>
            
                <FormHelperText>
                {touched && error}</FormHelperText>
            
            </FormControl>
        )
    ;
};
const renderSlider = (props) => {
    const {
        input, 
        label, 
        ...rest
    } = props;
    return  (
            <Slider value={input.value} onChange={(event, value) =>
                input.onChange(value)} {...rest}>
            </Slider>
        )
    ;
};
const RfSlider = (props) => {
    console.log('RfSlider.props', props);
    return  (
            <FormControlLabel className={props.classes.formControl} label={props.label} control={renderSlider(props)}>
            </FormControlLabel>
        )
    ;
};
const RfSwitch = (props) => {
    // log 'RfSwitch.props', props
    const {
        input, 
        label, 
        classes, 
        meta: { touched, error }, 
        ...rest
    } = props;
    return  (
            <SwitchField className={classes.formControl} touched={touched} err={error} input={input} label={label} editable={true} {...rest}>
            </SwitchField>
        )
    ;
};
const RfTextField = (props) => {
    // log 'RfTextField.props', props
    const {
        input, 
        label, 
        classes, 
        meta: { touched, error }, 
        ...rest
    } = props;
    return  (
            <TextField className={classes.formControl} touched={touched} err={error} input={input} label={label} editable={true} {...rest}>
            </TextField>
        )
    ;
};
const styles = theme => (
    {
        root: {
            backgroundColor: "#222", 
            color: "#ddd", 
            margin: "50px", 
            padding: "30px"
        }, 
        form: {
            backgroundColor: "#444", 
            padding: "10px"
        }, 
        formControl: {
            width: "100%"
        }
    });

class ReduxMuiForm extends React.Component {
    render() {
        const {
            handleSubmit,
            pristine,
            reset,
            submitting,
            classes
        } = this.props;
        return  (
                <div className={ classes.root }>
                    <form onSubmit={handleSubmit} className={ classes.form }>
                        <div>
                            <Field classes={classes} name="firstName" label="First Name" style={{width: '50%'}} component={RfTextField}>
                            </Field>
                        
                        </div>
                    
                        <div>
                            <Field classes={classes} name="lastName" label="Last Name" style={{width: '50%'}} component={RfTextField}>
                            </Field>
                        
                        </div>
                    
                        <div>
                            <Field classes={classes} name="email" label="Email" style={{width: '50%'}} component={RfTextField}>
                            </Field>
                        
                        </div>
                    
                        <div>
                            <Field classes={classes} name="sex" label="Sex" style={{width: '50%'}} component={RfRadioGroup}>
                                <FormControlLabel value="male" label="male" control={ (
                                    <Radio color="primary">
                                    </Radio>
                                )
                                } labelPlacement="start">
                                </FormControlLabel>
                            
                                <FormControlLabel value="female" label="female" control={ (
                                    <Radio color="primary">
                                    </Radio>
                                )
                                } labelPlacement="start">
                                </FormControlLabel>
                            
                            </Field>
                        
                        </div>
                    
                        <div>
                            <Field classes={classes} name="favoriteColor" label="Favorite Color" style={{width: '50%'}} component={RfSelect}>
                                <MenuItem value="ff0000">
                                Red</MenuItem>
                            
                                <MenuItem value="00ff00">
                                Green</MenuItem>
                            
                                <MenuItem value="0000ff">
                                Blue</MenuItem>
                            
                            </Field>
                        
                        </div>
                    
                        <div>
                            <Field classes={classes} name="employed" label="Employed" style={{width: '50%'}} component={RfCheckbox}>
                            </Field>
                        
                        </div>
                    
                        <div>
                            <Field classes={classes} name="country" label="Country" style={{width: '50%'}} component={RfAutocomplete} options={[
                                {
                                    value: "italy", 
                                    label: "Italy"
                                }, 
                                {
                                    value: "finland", 
                                    label: "Finland"
                                }, 
                                {
                                    value: "france", 
                                    label: "France"
                                }
                            ]}>
                            </Field>
                        
                        </div>
                    
                        <div>
                            <Field classes={classes} name="onboard" label="On board" style={{width: '50%'}} component={RfSwitch}>
                            </Field>
                        
                        </div>
                    
                        <div>
                            <Field classes={classes} name="englishLevel" label="English level" style={{width: '50%'}} component={RfSlider}>
                            </Field>
                        
                        </div>
                    
                        <div>
                            <Field classes={classes} name="memberFrom" label="Member from" style={{width: '50%'}} component={RfDatePicker}>
                            </Field>
                        
                        </div>
                    
                        <div>
                            <Field classes={classes} name="notes" label="Notes" style={{width: '50%'}} component={RfTextField} multiline={true} rows={2}>
                            </Field>
                        
                        </div>
                    
                        <div>
                            <button type="submit" disabled={pristine || submitting}>
                            Submit</button>
                        
                            <button type="button" disabled={pristine || submitting} onClick={reset}>
                            Clear values</button>
                        
                        </div>
                    
                    </form>
                
                </div>
            )
        ;
    }
}
ReduxMuiForm = withStyles(styles)(ReduxMuiForm)
;
export default ReduxMuiForm;
