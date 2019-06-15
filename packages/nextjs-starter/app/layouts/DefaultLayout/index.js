/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\nextjs-starter\.wizzi\src\layouts\DefaultLayout\index.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from './Header';
class DefaultLayout extends React.Component {
    render() {
        const {
            children
        } = this.props;
        return  (
                <div>
                    <h1>
                    Hello default layout
                    </h1>
                
                    <Header>
                    </Header>
                
                {children}</div>
            )
        ;
    }
}
export default DefaultLayout;
