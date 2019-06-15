/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\views\ProductList\components\ProductsToolbar\index.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import {Button} from '@material-ui/core';
import DisplayMode from 'components/widgets/DisplayMode';
import SearchInput from 'components/widgets/SearchInput';
const styles = theme => (
    {
        root: {}, 
        row: {
            height: '42px', 
            display: 'flex', 
            alignItems: 'center', 
            marginTop: theme.spacing.unit
        }, 
        spacer: {
            flexGrow: 1
        }, 
        searchInput: {
            marginRight: theme.spacing.unit
        }
    });

class Password extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            classes, 
            className
        } = this.props;
        const rootClassName = classNames(classes.root, className);
        return  (
                <div className={rootClassName}>
                    <div className={classes.row}>
                        <span className={classes.spacer}>
                        </span>
                    
                        <Button color="primary" size="small" variant="outlined">
                        Add</Button>
                    
                    </div>
                
                    <div className={classes.row}>
                        <SearchInput className={classes.searchInput} placeholder="Search product">
                        </SearchInput>
                    
                        <span className={classes.spacer}>
                        </span>
                    
                        <DisplayMode mode="grid">
                        </DisplayMode>
                    
                    </div>
                
                </div>
            )
        ;
    }
}
Password = compose(withStyles(styles))(Password)
;
export default Password;
