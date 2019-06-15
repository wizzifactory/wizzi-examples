/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\common\mui\Splitter.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
function unFocus(document, window) {
    if (document.selection) {
        document.selection.empty();
    }
    else {
        try {
            window.getSelection().removeAllRanges()
        } 
        catch (e) {
        } 
    }
}
const styles = (theme) => {
    return {};
};
class Splitter extends React.Component {
    state = {
        active: false, 
        resized: false
    };
    componentDidMount() {
        this.setSize(this.props, this.state);
        document.addEventListener('mouseup', this.onMouseUp);
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('touchmove', this.onTouchMove);
    }
    componentWillReceiveProps(nextProps) {
        this.setSize(props, this.state);
    }
    componentWillUnmount() {
        document.removeEventListener('mouseup', this.onMouseUp);
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('touchmove', this.onTouchMove);
    }
    onMouseDown = (event) => {
        var eventWithTouches = Object.assign({}, event, {
            touches: [
                {
                    clientX: event.clientX, 
                    clientY: event.clientY
                }
            ]
        });
        this.onTouchStart(eventWithTouches);
    }
    onTouchStart = (event) => {
        var {allowResize, onDragStarted, split} = this.props;
        if (allowResize) {
            unFocus(document, window);
            var position = split === 'vertical' ? event.touches[0].clientX : event.touches[0].clientY;
            ;
            if (typeof(onDragStarted) === 'function') {
                onDragStarted();
            }
            this.setState({
                active: true, 
                position: position
            });
        }
    }
    onMouseMove = (event) => {
        var eventWithTouches = Object.assign({}, event, {
            touches: [
                {
                    clientX: event.clientX, 
                    clientY: event.clientY
                }
            ]
        });
        this.onTouchMove(eventWithTouches);
    }
    onTouchMove = (event) => {
        var {allowResize, maxSize, minSize, onChange, split} = this.props;
        var {active, position} = this.state;
        if (allowResize && active) {
            unFocus(document, window);
            var isPrimaryFirst = this.props.primary === 'first';
            var ref = isPrimaryFirst ? this.pane_1 : this.pane_2;
            ;
            if (ref) {
                var node = ReactDOM.findDOMNode(ref);
                if (node.getBoundingClientRect) {
                    var width = node.getBoundingClientRect().width
                    ;
                    var height = node.getBoundingClientRect().height
                    ;
                    var current = split === 'vertical' ? event.touches[0].clientX : event.touches[0].clientY;
                    ;
                    var size = split === 'vertical' ? width : height;
                    var newPosition = isPrimaryFirst ? (position - current) : (current - position);
                    var newMaxSize = maxSize;
                    if (maxSize !== undefined && maxSize <= 0) {
                        var splPane = this.splitPane;
                        if (split === 'vertical') {
                            newMaxSize = splPane.getBoundingClientRect().width + maxSize;
                        }
                        else {
                            newMaxSize = splPane.getBoundingClientRect().height + maxSize;
                        }
                    }
                    var newSize = size - newPosition;
                    if (newSize < minSize) {
                        newSize = minSize;
                    }
                    else if (maxSize !== undefined && newSize > newMaxSize) {
                        newSize = newMaxSize;
                    }
                    else {
                        this.setState({
                            position: current, 
                            resized: true
                        });
                    }
                    if (onChange) {
                        onChange(newSize);
                    }
                    this.setState({
                        draggedSize: newSize
                    });
                    ref.setState({
                        size: newSize
                    });
                }
            }
        }
    }
    onMouseUp = () => {
        var {allowResize, onDragFinished} = this.props;
        var {active, draggedSize} = this.state;
        if (allowResize && active) {
            if (typeof (onDragFinished) === 'function') {
                onDragFinished(draggedSize);
            }
            this.setState({
                active: false
            });
        }
    }
    setSize(props, state) {
        var {primary} = this.props;
        var ref = primary === 'first' ? this.pane_1 : this.pane_2;
        ;
        var newSize;
        if (ref) {
            newSize = props.size || (state && state.draggedSize) || props.defaultSize || props.minSize;
            ref.setState({
                size: newSize
            });
            if (props.size !== state.draggedSize) {
                this.setState({
                    draggedSize: newSize
                });
            }
        }
    }
    render() {
        var { allowResize, children, className, defaultSize, minSize, onResizerClick, onResizerDoubleClick, paneStyle, pane_1_Style: pane_1_StyleProps, pane_2_Style: pane_2_StyleProps, primary, prefixer, resizerClassName, resizerStyle, size, split, style: styleProps } = this.props;
        var disabledClass = allowResize ? '' : 'disabled';
        var style = Object.assign({}, (styleProps || {}), {
            display: 'flex', 
            flex: 1, 
            height: '100%', 
            position: 'absolute', 
            outline: 'none', 
            overflow: 'hidden', 
            MozUserSelect: 'text', 
            WebkitUserSelect: 'text', 
            msUserSelect: 'text', 
            userSelect: 'text'
        });
        if (split === 'vertical') {
            Object.assign(style, {
                flexDirection: 'row', 
                left: 0, 
                right: 0
            });
        }
        else {
            Object.assign(style, {
                bottom: 0, 
                flexDirection: 'column', 
                minHeight: '100%', 
                top: 0, 
                width: '100%'
            });
        }
        var classes = [
            'SplitPane', 
            className, 
            split, 
            disabledClass
        ];
        var pane_1_Style = prefixer.prefix(Object.assign({}, (paneStyle || {}), (pane_1_StyleProps || {})));
        var pane_2_Style = prefixer.prefix(Object.assign({}, (paneStyle || {}), (pane_2_StyleProps || {})));
        return  (
                <div className={classes.join(' ')} ref={() =>
                    this.this.splitPane = node} style={prefixer.prefix(style)}>
                    <Pane className="Pane1" key="pane_1" ref={() =>
                        this.this.pane_1 = node} size={primary === 'first' ? size || defaultSize || minSize : undefined} split={split} style={pane_1_Style}>
                    {children[0]}</Pane>
                
                    <Resizer className={disabledClass} onClick={onResizerClick} onDoubleClick={onResizerDoubleClick} onMouseDown={this.onMouseDown} onTouchStart={this.onTouchStart} onTouchEnd={this.onMouseUp} key="resizer" ref={() =>
                        this.this.resizer = node} resizerClassName={resizerClassName} split={split} style={resizerStyle || {}}>
                    </Resizer>
                
                    <Pane className="Pane2" key="pane_2" ref={() =>
                        this.this.pane_2 = node} size={primary === 'second' ? size || defaultSize || minSize : undefined} split={split} style={pane_2_Style}>
                    {children[1]}</Pane>
                
                </div>
            )
        ;
    }
}
Splitter.propTypes = {
    allowResize: PropTypes.bool, 
    children: PropTypes.arrayOf(PropTypes.node).isRequired
    , 
    className: PropTypes.string, 
    primary: PropTypes.oneOf([
        'first', 
        'second'
    ]), 
    minSize: PropTypes.oneOfType([
        PropTypes.string, 
        PropTypes.number
    ]), 
    maxSize: PropTypes.oneOfType([
        PropTypes.string, 
        PropTypes.number
    ]), 
    defaultSize: PropTypes.oneOfType([
        PropTypes.string, 
        PropTypes.number
    ]), 
    size: PropTypes.oneOfType([
        PropTypes.string, 
        PropTypes.number
    ]), 
    split: PropTypes.oneOf([
        'vertical', 
        'horizontal'
    ]), 
    onDragStarted: PropTypes.func, 
    onDragFinished: PropTypes.func, 
    onChange: PropTypes.func, 
    onResizerClick: PropTypes.func, 
    onResizerDoubleClick: PropTypes.func, 
    prefixer: PropTypes.instanceOf(Prefixer).isRequired
    , 
    style: stylePropType, 
    resizerStyle: stylePropType, 
    paneStyle: stylePropType, 
    pane_1_Style: stylePropType, 
    pane_2_Style: stylePropType, 
    resizerClassName: PropTypes.string
};
Splitter.defaultProps = {
    allowResize: true, 
    minSize: 50, 
    prefixer: new Prefixer({
        userAgent: USER_AGENT
    }), 
    primary: 'first', 
    split: 'vertical'
};
export default withStyles(styles)(Splitter);
