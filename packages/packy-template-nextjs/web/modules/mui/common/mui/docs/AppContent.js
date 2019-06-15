/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\common\mui\docs\AppContent.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import MarkdownElement from './MarkdownElement';
const styles = theme => (
    {
        content: theme.mixins.gutters({
            paddingTop: 80, 
            flex: '1 1 100%', 
            maxWidth: '100%', 
            margin: '0 auto'
        }), 
        [theme.breakpoints.up(948)]: {
            content: {
                maxWidth: 900
            }
        }
    });

class AppContent extends React.Component {
    render() {
        const {
            className,
            classes,
            children: childrenProp,
            route
        } = this.props;
        let children = childrenProp;
        if (!children) {
            const text = `# Summary${route.childRoutes.map((childRoute) => {
                return `- [${childRoute.title}](${childRoute.path})`;
            }).join('\n')
            }`;
            console.log('AppContent.text', text);
            children =  (
                <MarkdownElement text={text}>
                </MarkdownElement>
            )
            ;
        }
        // log 'AppContent.children', children
        return  (
                <div className={classNames(classes.content, className)}>
                {children}</div>
            )
        ;
    }
}

AppContent.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.string.isRequired,
    className: PropTypes.string,
    route: PropTypes.string.isRequired
}

export default AppContent
