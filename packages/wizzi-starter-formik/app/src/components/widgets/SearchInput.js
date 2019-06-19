/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\widgets\SearchInput.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import {Input} from '@material-ui/core';
import {Search as SearchIcon} from '@material-ui/icons';
const styles = theme => (
    {
        root: {
            alignItems: 'center', 
            backgroundColor: theme.palette.common.white, 
            border: `1px solid${theme.palette.common.neutral}`, 
            borderRadius: '4px', 
            display: 'flex', 
            flexBasis: '420px', 
            paddingBottom: theme.spacing.unit * 0.5, 
            paddingLeft: theme.spacing.unit, 
            paddingRight: theme.spacing.unit, 
            paddingTop: theme.spacing.unit * 0.5
        }, 
        icon: {
            marginRight: theme.spacing.unit, 
            color: theme.palette.text.secondary
        }, 
        input: {
            flexGrow: 1, 
            fontSize: '14px', 
            lineHeight: '16px', 
            letterSpacing: '-0.05px'
        }
    });

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            classes, 
            className, 
            onChange, 
            style, 
            ...rest
        } = this.props;
        const rootClassName = classNames(classes.root, className);
        return  (
                <div className={rootClassName} style={style}>
                    <SearchIcon className={classes.icon}>
                    </SearchIcon>
                
                    <Input {...rest} className={classes.input} disableUnderline onChange={onChange}>
                    </Input>
                
                </div>
            )
        ;
    }
}

SearchInput.propTypes = {
    onChange: PropTypes.func
}

SearchInput.defaultProps  = {
    onChange: () => {}
}
SearchInput = compose(withStyles(styles))(SearchInput)
;
export default SearchInput;
