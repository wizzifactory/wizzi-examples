/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\cssbuilder\components\StyledHtmlFragment.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import StyledHtmlElement from './StyledHtmlElement';
import Control from '../../common/mui/Control';
const styles = theme => (
    {
        styledPanel: {
            padding: '10px'
        }, 
        styled: {
            border: '1px solid darkred', 
            padding: '10px', 
            margin: '10px'
        }, 
        margin10: {
            margin: '10px'
        }
    });

class StyledHtmlFragment extends React.Component {
    render() {
        const {
            classes,
            htmlFragments,
            selectedHtmlFragmentId,
            onSelectedHtmlFragmentChange,
            cssRules
        } = this.props;
        const htmlFragmentMeta = htmlFragments[selectedHtmlFragmentId];
        // log 'StyledHtmlFragment.selectedHtmlFragmentId', selectedHtmlFragmentId
        // log 'StyledHtmlFragment.htmlFragmentMeta', htmlFragmentMeta
        return  (
                <Paper>
                    <div className={classes.styledPanel}>
                        <Typography type="title" color='inherit' noWrap>
                        Styled html</Typography>
                    
                        <div className={classes.margin10}>
                            <Control id="fragmentId" key="fragmentId" type="select" label="Html fragment" value={selectedHtmlFragmentId} data={{
                                options: Object.keys(htmlFragments)
                            }} onChangeValue={onSelectedHtmlFragmentChange}>
                            </Control>
                        
                        </div>
                    
                    {
                        htmlFragmentMeta &&  (
                            <div className={classes.styled}>
                                <StyledHtmlElement htmlFragmentMeta={htmlFragmentMeta} cssRules={cssRules}>
                                </StyledHtmlElement>
                            
                            </div>
                        )
                        
                    }</div>
                
                </Paper>
            )
        ;
    }
}

StyledHtmlFragment.propTypes = {
    classes: PropTypes.object,
    htmlFragments: PropTypes.object,
    selectedHtmlFragmentId: PropTypes.string.isRequired,
    onSelectedHtmlFragmentChange: PropTypes.func.isRequired,
    cssRules: PropTypes.object
}

export default withStyles(styles)(StyledHtmlFragment)
