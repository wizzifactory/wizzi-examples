/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\cssbuilder\components\App.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import StyledHtmlFragment from '../components/StyledHtmlFragment';
import StylesEditor from '../components/StylesEditor';
import { Row, Col } from '../../common/mui/grid';
var readme = require('../readme.md');
import MarkdownElement from '../../common/mui/docs/MarkdownElement';
const styles = theme => (
    {
        container: {
            paddingTop: '80px'
        }
    });

class App extends React.Component {
    state = {
        showReadme: false
    };
    render() {
        const {
            classes,
            selectedHtmlFragmentRuleIds,
            selectedStyleGroupMetaForm,
            htmlFragments,
            cssRules,
            selectedHtmlFragmentId,
            selectedRuleId,
            selectedStyleGroupId,
            styleGroupIds,
            onSelectedHtmlFragmentChange,
            onSelectedRuleChange,
            onSelectedStyleGroupChange,
            onStyleValuesChange
        } = this.props;
        console.log('components.App.selectedHtmlFragmentRuleIds', selectedHtmlFragmentRuleIds);
        return  (
                <div>
                    <AppBar>
                        <Toolbar>
                            <Typography type="title" color='inherit' noWrap>
                            Styles builder</Typography>
                        
                        </Toolbar>
                    
                    </AppBar>
                
                    <div className={classes.container}>
                        <Row>
                            <Col span={8}>
                                <StyledHtmlFragment selectedHtmlFragmentId={selectedHtmlFragmentId} htmlFragments={htmlFragments} cssRules={cssRules} onSelectedHtmlFragmentChange={onSelectedHtmlFragmentChange}>
                                </StyledHtmlFragment>
                            
                            </Col>
                        
                            <Col span={4}>
                                <StylesEditor selectedRuleId={selectedRuleId} selectedStyleGroupId={selectedStyleGroupId} ruleIds={selectedHtmlFragmentRuleIds} styleGroupIds={styleGroupIds} selectedStyleGroupMetaForm={selectedStyleGroupMetaForm} onSelectedRuleChange={onSelectedRuleChange} onSelectedStyleGroupChange={onSelectedStyleGroupChange} onStyleValuesChange={onStyleValuesChange}>
                                </StylesEditor>
                            
                            </Col>
                        
                        </Row>
                    
                    </div>
                
                </div>
            )
        ;
    }
}

App.propTypes = {
    styleGroupIds: PropTypes.array.isRequired
}

export default withStyles(styles)(App)
