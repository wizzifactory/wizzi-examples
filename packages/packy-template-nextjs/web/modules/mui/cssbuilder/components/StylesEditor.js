/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\cssbuilder\components\StylesEditor.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Form from '../../common/mui/Form';
import Control from '../../common/mui/Control';
const styles = theme => (
    {
        styles: {
            padding: '10px'
        }, 
        stylevalues: {
            marginTop: '10px', 
            paddingTop: '6px', 
            borderTop: '1px solid gray'
        }, 
        rulegroups: {
            display: 'flex'
        }
    });

class StylesEditor extends React.Component {
    render() {
        const {
            classes,
            selectedRuleId,
            selectedStyleGroupId,
            ruleIds,
            styleGroupIds,
            selectedStyleGroupMetaForm,
            onSelectedRuleChange,
            onSelectedStyleGroupChange,
            onStyleValuesChange
        } = this.props;
        console.log('selectedStyleGroupId, selectedStyleGroupMetaForm', selectedStyleGroupId, selectedStyleGroupMetaForm);
        return  (
                <Paper>
                    <div className={classes.styles}>
                        <Typography type="title" color='inherit' noWrap>
                        </Typography>
                    
                        <div className={classes.rulegroups}>
                            <Control id="ruleId" key="ruleId" type="select" label="Rule" value={selectedRuleId} data={{
                                options: ruleIds
                            }} onChangeValue={onSelectedRuleChange}>
                            </Control>
                        
                            <Control id="styleGroup" key="styleGroup" type="select" label="Style group" value={selectedStyleGroupId} data={{
                                options: styleGroupIds
                            }} onChangeValue={onSelectedStyleGroupChange}>
                            </Control>
                        
                        </div>
                    
                    {
                        selectedStyleGroupMetaForm &&  (
                            <div className={classes.stylevalues}>
                                <Form id="styleEditorForm" meta={selectedStyleGroupMetaForm} onChangeValues={onStyleValuesChange}>
                                </Form>
                            
                            </div>
                        )
                        
                    }</div>
                
                </Paper>
            )
        ;
    }
}

export default withStyles(styles)(StylesEditor)
