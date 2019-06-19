/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\widgets\DisplayMode.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {List as ListIcon, Apps as AppsIcon} from '@material-ui/icons';
const styles = theme => (
    {
        root: {
            flexGrow: 0, 
            flexShrink: 0, 
            overflow: 'hidden', 
            borderRadius: '5px', 
            display: 'inline-flex', 
            border: `1px solid${theme.palette.border}`
        }, 
        option: {
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            padding: theme.spacing.unit, 
            backgroundColor: theme.palette.common.white
        }, 
        optionSelected: {
            backgroundColor: theme.palette.primary.light, 
            color: theme.palette.primary.main
        }, 
        divider: {
            width: '1px', 
            backgroundColor: theme.palette.divider
        }
    });

class DisplayMode extends React.Component {
    render() {
        const {
            classes, 
            className, 
            mode, 
            onChange
        } = this.props;
        const rootClassName = classNames(classes.root, className);
        return  (
                <div className={rootClassName}>
                    <span className={classNames({
                        [classes.option]: true, 
                        [classes.optionSelected]: mode === 'grid'
                    })} onClick={onChange}>
                        <AppsIcon className={classes.displayIcon}>
                        </AppsIcon>
                    
                    </span>
                
                    <span className={classes.divider}>
                    </span>
                
                    <span className={classNames({
                        [classes.option]: true, 
                        [classes.optionSelected]: mode === 'list'
                    })} onClick={onChange}>
                        <ListIcon className={classes.displayIcon}>
                        </ListIcon>
                    
                    </span>
                
                </div>
            )
        ;
    }
}

DisplayMode.propTypes = {
    mode: PropTypes.oneOf([
        'grid',
        'list'
    ])
    ,
    onChange: PropTypes.func
}

DisplayMode.defaultProps  = {
    onChange: () => {}
}
DisplayMode = withStyles(styles)(DisplayMode)
;
export default DisplayMode;
