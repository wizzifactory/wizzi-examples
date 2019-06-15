/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\cssbuilder\components\StyledHtmlElement.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => (
    {});

class StyledHtmlElement extends React.Component {
    state = {
        elementEvents: {}, 
        elementSelectorStates: {}
    };
    setSelectorState = (name, eventIn, eventOut) => {
        const {htmlFragmentMeta, cssRules} = this.props;
        const nameLen = name.length + 1;
        if (cssRules) {
            for (var k in cssRules) {
                // log 'style is :' + name + ', k.slice(-' + nameLen + ')', k.slice(-nameLen)
                if (k.slice(-nameLen) === ':' + name) {
                    // log 'style is :' + name
                    const basestyle = k.substr(0, k.length-nameLen);
                    if (htmlFragmentMeta.class && htmlFragmentMeta.class.split(' ').indexOf(basestyle) > -1) {
                        // log 'has ' + name + ' selector', htmlFragmentMeta.class.split(' '), basestyle, htmlFragmentMeta.class.split(' ').indexOf(basestyle) > -1
                        this.setState({
                            elementEvents: {
                                ...this.state.elementEvents, 
                                [eventIn]: () => {
                                    // log '---- ' + eventIn, this.state.elementSelectorStates
                                    this.setState({
                                        elementSelectorStates: {
                                            ...this.state.elementSelectorStates, 
                                            [k]: true
                                        }
                                    });
                                }, 
                                [eventOut]: () => {
                                    // log '---- ' + eventOut, this.state.elementSelectorStates
                                    this.setState({
                                        elementSelectorStates: {
                                            ...this.state.elementSelectorStates, 
                                            [k]: false
                                        }
                                    });
                                }
                            }
                        });
                    }
                }
            }
        }
    }
    componentDidMount() {
        this.setSelectorState('hover', 'onMouseEnter', 'onMouseOut');
        this.setSelectorState('focus', 'onFocus', 'onBlur');
    }
    render() {
        const {
            htmlFragmentMeta,
            cssRules
        } = this.props;
        // log "htmlFragmentMeta", htmlFragmentMeta
        const elementProps = {};
        const elementEvents = {};
        const children = [];
        if (htmlFragmentMeta.text && htmlFragmentMeta.text.length > 0) {
            children.push(htmlFragmentMeta.text);
        }
        if (htmlFragmentMeta.children && htmlFragmentMeta.children.length > 0) {
            var i, i_items=htmlFragmentMeta.children, i_len=htmlFragmentMeta.children.length, c;
            for (i=0; i<i_len; i++) {
                c = htmlFragmentMeta.children[i];
                if (c.prop) {
                    elementProps[c.prop] = c.value;
                }
                else if (c.tag) {
                    // log 'children.push.React.createElement', htmlFragmentMeta.tag, c.tag
                    children.push(React.createElement(StyledHtmlElement, {
                        htmlFragmentMeta: c, 
                        cssRules: cssRules, 
                        key: "k" + i
                    }));
                }
                else if (c.text) {
                    children.push(c.text);
                }
            }
        }
        var modStyles = {};
        if (cssRules) {
            for (var k in cssRules) {
                if (htmlFragmentMeta.class && htmlFragmentMeta.class.split(' ').indexOf(k) > -1) {
                    for (var z in cssRules[k]) {
                        modStyles[z] = cssRules[k][z];
                    }
                }
                var i, i_items=['hover','focus'], i_len=['hover','focus'].length, selector;
                for (i=0; i<i_len; i++) {
                    selector = ['hover','focus'][i];
                    const nameLen = selector.length + 1;
                    if (k.slice(-nameLen) === ':' + selector) {
                        // log 'selector', k, this.state.elementSelectorStates
                        if (this.state.elementSelectorStates[k]) {
                            // log 'I should set ' + selector + ' rule on', k
                            for (var z in cssRules[k]) {
                                modStyles[z] = cssRules[k][z];
                            }
                        }
                    }
                }
            }
        }
        // log 'React.createElement', htmlFragmentMeta.tag, elementProps, children
        return React.createElement(htmlFragmentMeta.tag, {
                ...elementProps, 
                ...this.state.elementEvents, 
                style: {
                    ...modStyles
                }
            }, children.length > 0 ? children : null);
    }
}

StyledHtmlElement.propTypes = {
    htmlFragmentMeta: PropTypes.object.isRequired,
    cssRules: PropTypes.object.isRequired
}

export default withStyles(styles)(StyledHtmlElement)
