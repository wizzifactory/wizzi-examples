/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\cssbuilder\containers\StylesData.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import { dasherize } from '../utils/helpers';

var stylesEditorMetaForm = {
    groups: [
        {
            id: 'box', 
            controls: [
                {
                    id: 'alignContent', 
                    type: 'select', 
                    data: {
                        options: [
                            'start', 
                            'end', 
                            'flex-start', 
                            'flex-end', 
                            'center', 
                            'normal', 
                            'baseline', 
                            'first', 
                            'last', 
                            'space-between', 
                            'space-around', 
                            'space-evenly', 
                            'stretch', 
                            'safe', 
                            'unsafe'
                        ]
                    }
                }, 
                {
                    id: 'alignItems', 
                    type: 'select', 
                    data: {
                        options: [
                            'normal', 
                            'flex-start', 
                            'flex-end', 
                            'center', 
                            'start', 
                            'end', 
                            'self-start', 
                            'self-end', 
                            'baseline', 
                            'first baseline', 
                            'last baseline', 
                            'stretch', 
                            'safe', 
                            'unsafe'
                        ]
                    }
                }, 
                {
                    id: 'alignSelf', 
                    type: 'select', 
                    data: {
                        options: [
                            'auto', 
                            'normal', 
                            'stretch', 
                            'first baseline', 
                            'last baseline', 
                            'unsafe', 
                            'safe', 
                            'center', 
                            'start', 
                            'end', 
                            'self-start', 
                            'self-end', 
                            'flex-start', 
                            'flex-end'
                        ]
                    }
                }, 
                {
                    id: 'clear', 
                    type: 'select', 
                    data: {
                        options: [
                            'none', 
                            'left', 
                            'right', 
                            'both', 
                            'inline-start', 
                            'inline-end'
                        ]
                    }
                }, 
                {
                    id: 'columnGap', 
                    type: 'text'
                }, 
                {
                    id: 'display', 
                    type: 'select', 
                    data: {
                        options: [
                            'block', 
                            'inline', 
                            'run-in', 
                            'flow', 
                            'flow-root', 
                            'table', 
                            'flex', 
                            'grid', 
                            'ruby', 
                            'list-item', 
                            'contents', 
                            'none', 
                            'inline-block', 
                            'inline-list-item', 
                            'inline-table', 
                            'inline-flex', 
                            'inline-grid', 
                            'table-row-group', 
                            'table-header-group', 
                            'table-footer-group', 
                            'table-row', 
                            'table-cell', 
                            'table-column-group', 
                            'table-column', 
                            'table-caption', 
                            'ruby-base', 
                            'ruby-text', 
                            'ruby-base-container', 
                            'ruby-text-container'
                        ]
                    }
                }, 
                {
                    id: 'justifyItems', 
                    type: 'select', 
                    data: {
                        options: [
                            'normal', 
                            'stretch', 
                            'first baseline', 
                            'last baseline', 
                            'unsafe', 
                            'safe', 
                            'center', 
                            'start', 
                            'end', 
                            'self-start', 
                            'self-end', 
                            'flex-start', 
                            'flex-end', 
                            'left', 
                            'right', 
                            'legacy', 
                            'legacy left', 
                            'legacy right', 
                            'legacy center'
                        ]
                    }
                }, 
                {
                    id: 'justifySelf', 
                    type: 'select', 
                    data: {
                        options: [
                            'normal', 
                            'stretch', 
                            'first baseline', 
                            'last baseline', 
                            'unsafe', 
                            'safe', 
                            'center', 
                            'start', 
                            'end', 
                            'self-start', 
                            'self-end', 
                            'flex-start', 
                            'flex-end', 
                            'left', 
                            'right'
                        ]
                    }
                }, 
                {
                    id: 'overflow', 
                    type: 'text'
                }, 
                {
                    id: 'overflowX', 
                    type: 'select', 
                    data: {
                        options: [
                            'visible', 
                            'hidden', 
                            'clip', 
                            'scroll', 
                            'auto'
                        ]
                    }
                }, 
                {
                    id: 'overflowY', 
                    type: 'select', 
                    data: {
                        options: [
                            'visible', 
                            'hidden', 
                            'clip', 
                            'scroll', 
                            'auto'
                        ]
                    }
                }, 
                {
                    id: 'placeContent', 
                    type: 'select', 
                    data: {
                        options: [
                            'TODO'
                        ]
                    }
                }, 
                {
                    id: 'placeItems', 
                    type: 'select', 
                    data: {
                        options: [
                            'TODO'
                        ]
                    }
                }, 
                {
                    id: 'placeSelf', 
                    type: 'select', 
                    data: {
                        options: [
                            'TODO'
                        ]
                    }
                }, 
                {
                    id: 'position', 
                    type: 'select', 
                    data: {
                        options: [
                            'static', 
                            'relative', 
                            'absolute', 
                            'sticky', 
                            'fixed'
                        ]
                    }
                }, 
                {
                    id: 'userSelect', 
                    type: 'select', 
                    data: {
                        options: [
                            'auto', 
                            'text', 
                            'none', 
                            'contain', 
                            'all'
                        ]
                    }
                }, 
                {
                    id: 'zIndex', 
                    type: 'text'
                }
            ]
        }, 
        {
            id: 'layout', 
            controls: [
                {
                    id: 'height', 
                    type: 'text'
                }, 
                {
                    id: 'width', 
                    type: 'text'
                }, 
                {
                    id: 'top', 
                    type: 'text'
                }, 
                {
                    id: 'left', 
                    type: 'text'
                }, 
                {
                    id: 'bottom', 
                    type: 'text'
                }, 
                {
                    id: 'right', 
                    type: 'text'
                }, 
                {
                    id: 'padding', 
                    type: 'text', 
                    defaultValue: '10px'
                }, 
                {
                    id: 'margin', 
                    type: 'text', 
                    defaultValue: '5px'
                }, 
                {
                    id: 'float', 
                    type: 'select', 
                    data: {
                        options: [
                            'left', 
                            'right', 
                            'none', 
                            'inline-start', 
                            'inline-end'
                        ]
                    }
                }
            ]
        }, 
        {
            id: 'colors', 
            controls: [
                {
                    id: 'color', 
                    type: 'color'
                }, 
                {
                    id: 'background', 
                    type: 'text'
                }, 
                {
                    id: 'backgroundColor', 
                    type: 'color'
                }, 
                {
                    id: 'border', 
                    type: 'text'
                }, 
                {
                    id: 'borderTop', 
                    type: 'text'
                }, 
                {
                    id: 'borderLeft', 
                    type: 'text'
                }, 
                {
                    id: 'borderBottom', 
                    type: 'text'
                }, 
                {
                    id: 'borderRight', 
                    type: 'text'
                }, 
                {
                    id: 'borderRadius', 
                    type: 'text'
                }, 
                {
                    id: 'borderStyle', 
                    type: 'select', 
                    data: {
                        options: [
                            'none', 
                            'hidden', 
                            'dotted', 
                            'dashed', 
                            'solid', 
                            'double', 
                            'groove', 
                            'ridge', 
                            'inset', 
                            'outset'
                        ]
                    }
                }, 
                {
                    id: 'boxShadow', 
                    type: 'text'
                }
            ]
        }, 
        {
            id: 'text', 
            controls: [
                {
                    id: 'font', 
                    type: 'text'
                }, 
                {
                    id: 'fontFamily', 
                    type: 'text'
                }, 
                {
                    id: 'fontSize', 
                    type: 'text'
                }, 
                {
                    id: 'font', 
                    type: 'text'
                }, 
                {
                    id: 'fontFamily', 
                    type: 'text'
                }, 
                {
                    id: 'fontFeatureSettings', 
                    type: 'text'
                }, 
                {
                    id: 'fontKerning', 
                    type: 'text'
                }, 
                {
                    id: 'fontLanguageOverride', 
                    type: 'text'
                }, 
                {
                    id: 'fontOpticalSizing', 
                    type: 'text'
                }, 
                {
                    id: 'fontSize', 
                    type: 'text'
                }, 
                {
                    id: 'fontSizeAdjust', 
                    type: 'text'
                }, 
                {
                    id: 'fontStretch', 
                    type: 'text'
                }, 
                {
                    id: 'fontStyle', 
                    type: 'text'
                }, 
                {
                    id: 'fontSynthesis', 
                    type: 'text'
                }, 
                {
                    id: 'fontVariant', 
                    type: 'text'
                }, 
                {
                    id: 'fontVariantAlternates', 
                    type: 'text'
                }, 
                {
                    id: 'fontVariantCaps', 
                    type: 'text'
                }, 
                {
                    id: 'fontVariantEastAsian', 
                    type: 'text'
                }, 
                {
                    id: 'fontVariantLigatures', 
                    type: 'text'
                }, 
                {
                    id: 'fontVariantNumeric', 
                    type: 'text'
                }, 
                {
                    id: 'fontVariantPosition', 
                    type: 'text'
                }, 
                {
                    id: 'fontVariationSettings', 
                    type: 'text'
                }, 
                {
                    id: 'fontWeight', 
                    type: 'text'
                }, 
                {
                    id: 'lineHeight', 
                    type: 'text'
                }, 
                {
                    id: 'textAlign', 
                    type: 'select', 
                    data: {
                        options: [
                            'left', 
                            'right', 
                            'center', 
                            'justify', 
                            'justify-all'
                        ]
                    }
                }, 
                {
                    id: 'textDecoration', 
                    type: 'text'
                }, 
                {
                    id: 'textDecorationLine', 
                    type: 'text', 
                    defaultValue: ''
                }, 
                {
                    id: 'textDecorationStyle', 
                    type: 'select', 
                    data: {
                        options: [
                            'solid', 
                            'double', 
                            'dotted', 
                            'dashed', 
                            'wavy'
                        ]
                    }
                }, 
                {
                    id: 'textDecorationColor', 
                    type: 'color'
                }, 
                {
                    id: 'textEmphasis', 
                    type: 'text'
                }, 
                {
                    id: 'textEmphasisPosition', 
                    type: 'select', 
                    data: {
                        options: [
                            'over right', 
                            'over left', 
                            'under right', 
                            'under left'
                        ]
                    }
                }, 
                {
                    id: 'textEmphasisStyle', 
                    type: 'text'
                }, 
                {
                    id: 'textEmphasisColor', 
                    type: 'color'
                }, 
                {
                    id: 'textShadow', 
                    type: 'text'
                }, 
                {
                    id: 'textUnderlinePosition', 
                    type: 'text'
                }
            ]
        }, 
        {
            id: 'list', 
            controls: [
                {
                    id: 'listStyle', 
                    type: 'text'
                }, 
                {
                    id: 'listStyleType', 
                    type: 'select', 
                    data: {
                        options: [
                            'none', 
                            'disc', 
                            'circle', 
                            'square', 
                            'decimal', 
                            'cjk-decimal', 
                            'decimal-leading-zero', 
                            'lower-roman', 
                            'upper-roman', 
                            'lower-greek', 
                            'lower-alpha', 
                            'lower-latin', 
                            'lower-latin', 
                            'upper-alpha', 
                            'upper-latin'
                        ]
                    }
                }, 
                {
                    id: 'listStylePosition', 
                    type: 'select', 
                    data: {
                        options: [
                            'inside', 
                            'outside'
                        ]
                    }
                }, 
                {
                    id: 'listStyleImage', 
                    type: 'text'
                }
            ]
        }, 
        {
            id: 'grid', 
            controls: [
                {
                    id: 'grid', 
                    type: 'text'
                }, 
                {
                    id: 'gridArea', 
                    type: 'text'
                }, 
                {
                    id: 'gridAutoColumns', 
                    type: 'text'
                }, 
                {
                    id: 'gridAutoFlow', 
                    type: 'text'
                }, 
                {
                    id: 'gridAuto-rows', 
                    type: 'text'
                }, 
                {
                    id: 'gridColumn', 
                    type: 'text'
                }, 
                {
                    id: 'gridColumn-end', 
                    type: 'text'
                }, 
                {
                    id: 'gridColumnStart', 
                    type: 'text'
                }, 
                {
                    id: 'gridRow', 
                    type: 'text'
                }, 
                {
                    id: 'gridRow-end', 
                    type: 'text'
                }, 
                {
                    id: 'gridRowStart', 
                    type: 'text'
                }, 
                {
                    id: 'gridTemplate', 
                    type: 'text'
                }, 
                {
                    id: 'gridTemplateAreas', 
                    type: 'text'
                }, 
                {
                    id: 'gridTemplateColumns', 
                    type: 'text'
                }, 
                {
                    id: 'gridTemplateRows', 
                    type: 'text'
                }
            ]
        }, 
        {
            id: 'flex', 
            controls: [
                {
                    id: 'flex', 
                    type: 'text'
                }, 
                {
                    id: 'flexBasis', 
                    type: 'text'
                }, 
                {
                    id: 'flex-direction', 
                    type: 'select', 
                    data: {
                        options: [
                            'row', 
                            'row-reverse', 
                            'column', 
                            'column-reverse'
                        ]
                    }
                }, 
                {
                    id: 'flexFlow', 
                    type: 'text'
                }, 
                {
                    id: 'flexGrow', 
                    type: 'text'
                }, 
                {
                    id: 'flexShrink', 
                    type: 'text'
                }, 
                {
                    id: 'flexWrap', 
                    type: 'select', 
                    data: {
                        options: [
                            'nowrap', 
                            'wrap', 
                            'wrap-reverse'
                        ]
                    }
                }, 
                {
                    id: 'order', 
                    type: 'text'
                }
            ]
        }, 
        {
            id: 'column', 
            controls: [
                {
                    id: 'columns', 
                    type: 'text'
                }, 
                {
                    id: 'columnCount', 
                    type: 'text'
                }, 
                {
                    id: 'columnFill', 
                    type: 'text'
                }, 
                {
                    id: 'columnGap', 
                    type: 'text'
                }, 
                {
                    id: 'columnRule', 
                    type: 'text'
                }, 
                {
                    id: 'columnRuleColor', 
                    type: 'color'
                }, 
                {
                    id: 'columnRuleStyle', 
                    type: 'select', 
                    data: {
                        options: [
                            'none', 
                            'hidden', 
                            'dotted', 
                            'dashed', 
                            'solid', 
                            'double', 
                            'groove', 
                            'ridge', 
                            'inset', 
                            'outset'
                        ]
                    }
                }, 
                {
                    id: 'columnRuleWidth', 
                    type: 'text'
                }, 
                {
                    id: 'columnSpan', 
                    type: 'text'
                }, 
                {
                    id: 'columnWith', 
                    type: 'text'
                }
            ]
        }, 
        {
            id: 'effects', 
            controls: [
                {
                    id: 'transition', 
                    type: 'text'
                }
            ]
        }
    ]
};
const htmlFragments = {
    menu: {
        id: 'menu', 
        tag: 'div', 
        class: 'menu', 
        children: [
            {
                tag: 'div', 
                class: 'menu-item', 
                text: 'File', 
                children: []
            }, 
            {
                tag: 'div', 
                class: 'menu-item', 
                text: 'Edit', 
                children: []
            }
        ]
    }, 
    list: {
        id: 'list', 
        tag: 'ul', 
        class: 'list-1', 
        children: [
            {
                tag: 'li', 
                class: 'list-1-item', 
                text: 'File', 
                children: []
            }, 
            {
                tag: 'li', 
                class: 'list-1-item', 
                text: 'Edit', 
                children: []
            }
        ]
    }, 
    'media-object-1': {
        id: 'media-object-1', 
        tag: 'div', 
        class: 'media-object-1 media-object-1-attribution', 
        children: [
            {
                tag: 'a', 
                class: 'media-object-1-img', 
                text: '', 
                children: [
                    {
                        prop: 'href', 
                        value: 'http://twitter.com/stubbornella'
                    }, 
                    {
                        tag: 'img', 
                        class: 'media-object-1-img-img', 
                        children: [
                            {
                                prop: 'src', 
                                value: 'http://stubbornella.com/profile_image.jpg'
                            }, 
                            {
                                prop: 'alt', 
                                value: 'me'
                            }
                        ]
                    }
                ]
            }, 
            {
                tag: 'div', 
                class: 'media-object-1-bd', 
                text: '@Stubbornella 14 minutes ago', 
                children: []
            }
        ]
    }, 
    'bar-1': {
        id: 'bar-1', 
        tag: 'div', 
        class: '', 
        text: '', 
        children: [
            {
                tag: 'div', 
                class: 'bar-1-fb-featurebar bar-1-dark-theme-container', 
                text: 'Feature bar', 
                children: [
                    {
                        tag: 'div', 
                        class: 'bar-1-fb-featurebar-main', 
                        children: [
                            {
                                tag: 'div', 
                                class: 'bar-1-fb-featurebar-title-lockup', 
                                children: [
                                    {
                                        tag: 'div', 
                                        class: 'bar-1-fb-featurebar-title', 
                                        text: 'Database', 
                                        children: []
                                    }
                                ]
                            }, 
                            {
                                tag: 'div', 
                                class: 'bar-1-fb-featurebar-app-selector-container bar-1-fb-featurebar-space-consumer', 
                                children: [
                                    {
                                        tag: 'div', 
                                        class: 'bar-1-fb-resource-selector', 
                                        children: [
                                            {
                                                tag: 'div', 
                                                class: 'bar-1-resource-selector', 
                                                children: [
                                                    {
                                                        tag: 'div', 
                                                        class: 'bar-1-selected-resource-wrapper', 
                                                        children: [
                                                            {
                                                                tag: 'div', 
                                                                class: 'bar-1-selected-resource', 
                                                                children: [
                                                                    {
                                                                        tag: 'i', 
                                                                        class: 'bar-1-gmp-icons bar-1-ng-star-inserted', 
                                                                        text: 'gmp_firestore', 
                                                                        children: [
                                                                            {
                                                                                tag: 'span', 
                                                                                class: 'bar-1-resource-selector-text', 
                                                                                text: 'Cloud Firestore', 
                                                                                children: []
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }, 
                                                            {
                                                                tag: 'div', 
                                                                class: 'bar-1-mat-select-arrow-wrapper', 
                                                                children: [
                                                                    {
                                                                        tag: 'div', 
                                                                        class: 'bar-1-mat-select-arrow', 
                                                                        children: []
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }, 
                            {
                                tag: 'div', 
                                class: 'bar-1-fb-featurebar-help-container', 
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]
    }, 
    'twitter-bar': {
        id: 'twitter-bar', 
        tag: 'div', 
        class: 'twitter-bar-container', 
        children: [
            {
                id: 'twitter-bar', 
                tag: 'ul', 
                class: 'twitter-bar-ul', 
                children: [
                    {
                        prop: 'role', 
                        value: 'navigation'
                    }, 
                    {
                        tag: 'li', 
                        class: 'twitter-bar-li', 
                        children: [
                            {
                                tag: 'i', 
                                class: '', 
                                text: 'Home', 
                                children: [
                                    {
                                        prop: 'class', 
                                        value: 'fa fa-home'
                                    }
                                ]
                            }
                        ]
                    }, 
                    {
                        tag: 'li', 
                        class: 'twitter-bar-li', 
                        children: [
                            {
                                tag: 'i', 
                                class: '', 
                                text: 'Notifications', 
                                children: [
                                    {
                                        prop: 'class', 
                                        value: 'fa fa-bell-o'
                                    }
                                ]
                            }
                        ]
                    }, 
                    {
                        tag: 'li', 
                        class: 'twitter-bar-li', 
                        children: [
                            {
                                tag: 'i', 
                                class: '', 
                                text: 'Messages', 
                                children: [
                                    {
                                        prop: 'class', 
                                        value: 'fa fa-envelope-o'
                                    }
                                ]
                            }
                        ]
                    }, 
                    {
                        tag: 'li', 
                        class: 'twitter-bar-li twitter-bar__bird', 
                        children: [
                            {
                                tag: 'i', 
                                class: '', 
                                text: '', 
                                children: [
                                    {
                                        prop: 'class', 
                                        value: 'fa fa-twitter'
                                    }
                                ]
                            }
                        ]
                    }, 
                    {
                        tag: 'li', 
                        class: 'twitter-bar-li', 
                        children: [
                            {
                                tag: 'form', 
                                children: [
                                    {
                                        tag: 'input', 
                                        children: [
                                            {
                                                prop: 'placeholder', 
                                                value: 'search twitter'
                                            }
                                        ]
                                    }, 
                                    {
                                        tag: 'i', 
                                        class: '', 
                                        text: '', 
                                        children: [
                                            {
                                                prop: 'class', 
                                                value: 'fa fa-search'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }, 
                    {
                        tag: 'li', 
                        class: 'twitter-bar-li', 
                        children: [
                            {
                                tag: 'i', 
                                class: '', 
                                text: '', 
                                children: [
                                    {
                                        prop: 'class', 
                                        value: 'fa-user-circle-o'
                                    }
                                ]
                            }
                        ]
                    }, 
                    {
                        tag: 'li', 
                        class: 'twitter-bar-li', 
                        children: [
                            {
                                tag: 'button', 
                                class: 'twitter-bar-li-button', 
                                text: 'tweet', 
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]
    }, 
    'grid-1': {
        id: 'grid-1', 
        tag: 'div', 
        class: 'grid-1', 
        children: [
            {
                tag: 'header', 
                class: 'grid-1-header', 
                text: 'Header', 
                children: []
            }, 
            {
                tag: 'nav', 
                class: 'grid-1-nav', 
                text: 'Navigation', 
                children: []
            }, 
            {
                tag: 'main', 
                class: 'grid-1-main', 
                text: 'Navigation', 
                children: [
                    {
                        tag: 'h1', 
                        class: 'grid-1-h1', 
                        text: 'Main', 
                        children: []
                    }, 
                    {
                        tag: 'p', 
                        class: 'grid-1-p', 
                        text: 'Vestibulum consectetur sit amet nisi ut consectetur. Praesent efficitur nibh vitae fringilla scelerisque est neque faucibus quam in iaculis purus libero eget mauris. Curabitur et luctus sapien ac gravida orci. Aliquam erat volutpat. In hac habitasse platea dictumst. Aenean commodo arcu a commodo efficitur libero dolor mollis turpis non posuere orci leo eget enim. Curabitur sit amet elementum orci pulvinar dignissim urna. Morbi id ex eu ex congue laoreet. Aenean tincidunt dolor justo semper pretium libero luctus nec. Ut vulputate metus accumsan leo imperdiet tincidunt. Phasellus nec rutrum dolor. Cras imperdiet sollicitudin arcu id interdum nibh fermentum in.', 
                        children: []
                    }
                ]
            }, 
            {
                tag: 'aside', 
                class: 'grid-1-aside', 
                text: 'Related links', 
                children: []
            }, 
            {
                tag: 'footer', 
                class: 'grid-1-footer', 
                text: 'Footer', 
                children: []
            }
        ]
    }, 
    form: {
        id: 'form', 
        tag: 'form', 
        class: '', 
        text: '', 
        children: [
            {
                tag: 'ul', 
                class: 'form-1', 
                children: [
                    {
                        tag: 'li', 
                        class: 'form-1-li', 
                        children: [
                            {
                                tag: 'label', 
                                class: 'form-1-label', 
                                text: 'Full Name', 
                                children: [
                                    {
                                        tag: 'span', 
                                        class: 'form-1-required', 
                                        text: '*', 
                                        children: []
                                    }
                                ]
                            }, 
                            {
                                tag: 'input', 
                                class: 'form-1-field-divided form-1-field-input', 
                                children: [
                                    {
                                        prop: 'type', 
                                        value: 'text'
                                    }, 
                                    {
                                        prop: 'name', 
                                        value: 'field1'
                                    }, 
                                    {
                                        prop: 'placeholder', 
                                        value: 'First'
                                    }
                                ]
                            }, 
                            {
                                tag: 'input', 
                                class: 'form-1-field-divided form-1-field-input', 
                                children: [
                                    {
                                        prop: 'type', 
                                        value: 'text'
                                    }, 
                                    {
                                        prop: 'name', 
                                        value: 'field2'
                                    }, 
                                    {
                                        prop: 'placeholder', 
                                        value: 'Last'
                                    }
                                ]
                            }
                        ]
                    }, 
                    {
                        tag: 'li', 
                        class: 'form-1-li', 
                        children: [
                            {
                                tag: 'label', 
                                class: 'form-1-label', 
                                text: 'Email', 
                                children: [
                                    {
                                        tag: 'span', 
                                        class: 'form-1-required', 
                                        text: '*', 
                                        children: []
                                    }
                                ]
                            }, 
                            {
                                tag: 'input', 
                                class: 'field-long form-1-field-input', 
                                children: [
                                    {
                                        prop: 'type', 
                                        value: 'email'
                                    }, 
                                    {
                                        prop: 'name', 
                                        value: 'field3'
                                    }
                                ]
                            }
                        ]
                    }, 
                    {
                        tag: 'li', 
                        class: 'form-1-li', 
                        children: [
                            {
                                tag: 'label', 
                                class: 'form-1-label', 
                                text: 'Subject', 
                                children: []
                            }, 
                            {
                                tag: 'select', 
                                class: 'form-1-field-select form-1-field-input', 
                                children: [
                                    {
                                        prop: 'name', 
                                        value: 'field4'
                                    }, 
                                    {
                                        tag: 'option', 
                                        class: '', 
                                        text: 'Advertise', 
                                        children: [
                                            {
                                                prop: 'value', 
                                                value: 'Advertise'
                                            }
                                        ]
                                    }, 
                                    {
                                        tag: 'option', 
                                        class: '', 
                                        text: 'Partnership', 
                                        children: [
                                            {
                                                prop: 'value', 
                                                value: 'Partnership'
                                            }
                                        ]
                                    }, 
                                    {
                                        tag: 'option', 
                                        class: '', 
                                        text: 'General', 
                                        children: [
                                            {
                                                prop: 'value', 
                                                value: 'General Question'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }, 
                    {
                        tag: 'li', 
                        class: 'form-1-li', 
                        children: [
                            {
                                tag: 'label', 
                                class: 'form-1-label', 
                                text: 'Your Message', 
                                children: [
                                    {
                                        tag: 'span', 
                                        class: 'form-1-required', 
                                        text: '*', 
                                        children: []
                                    }
                                ]
                            }, 
                            {
                                tag: 'textarea', 
                                class: 'form-1-field-long form-1-field-textarea form-1-field-input', 
                                children: [
                                    {
                                        prop: 'name', 
                                        value: 'field5'
                                    }, 
                                    {
                                        prop: 'id', 
                                        value: 'field5'
                                    }
                                ]
                            }
                        ]
                    }, 
                    {
                        tag: 'li', 
                        class: 'form-1-li', 
                        children: [
                            {
                                tag: 'input', 
                                class: 'form-1-input-button', 
                                children: [
                                    {
                                        prop: 'type', 
                                        value: 'submit'
                                    }, 
                                    {
                                        prop: 'value', 
                                        value: 'Submit'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
};
const initialCssRules = {
    menu: {
        backgroundColor: '#ff0000', 
        color: '#00ff00'
    }, 
    'menu-item': {
        backgroundColor: '#00ff00', 
        color: '#ff0000'
    }, 
    'list-1': {
        backgroundColor: '#00ffff', 
        color: '#ff0000'
    }, 
    'form-1': {
        margin: '10px auto', 
        maxWidth: '400px', 
        padding: '20px 12px 10px 20px', 
        font: '13px "Lucida Sans Unicode", "Lucida Grande", sans-serif'
    }, 
    'form-1-li': {
        padding: '0', 
        display: 'block', 
        listStyle: 'none', 
        margin: '10px 0 0 0'
    }, 
    'form-1-label': {
        margin: '0 0 3px 0', 
        padding: '0px', 
        display: 'block', 
        fontWeight: 'bold'
    }, 
    'form-1-input': {
        boxSizing: 'border-box', 
        border: '1px solid #BEBEBE', 
        padding: '7px', 
        margin: '0px', 
        transition: 'all 0.30s ease-in-out', 
        outline: 'none'
    }, 
    'form-1-field-inputfocus': {
        boxShadow: '0 0 8px #88D5E9', 
        border: '1px solid #88D5E9'
    }, 
    'form-1-field-divided': {
        width: '49%'
    }, 
    'form-1-field-long': {
        width: '100%'
    }, 
    'form-1-field-select': {
        width: '100%'
    }, 
    'form-1-field-textarea': {
        height: '100px'
    }, 
    'form-1-input-button': {
        background: '#4B99AD', 
        padding: '8px 15px 8px 15px', 
        border: 'none', 
        color: '#ffffff'
    }, 
    'form-1-input-button:hover': {
        background: '#4590A3', 
        boxShadow: 'none'
    }, 
    'form-1-required': {
        color: '#ff0000'
    }, 
    'grid-1-header': {
        gridColumn: 'span 3', 
        padding: '30px', 
        textAlign: 'center', 
        fontSize: '1.4em', 
        backgroundColor: '#336699', 
        color: '#ffffff'
    }, 
    'grid-1-main': {
        flex: '1', 
        padding: '20px'
    }, 
    'grid-1-nav': {
        backgroundColor: '#ff9900', 
        padding: '20px'
    }, 
    'grid-1-aside': {
        padding: '20px', 
        backgroundColor: '#903060'
    }, 
    'grid-1-footer': {
        gridColumn: 'span 3', 
        padding: '30px', 
        textAlign: 'center', 
        fontSize: '1.4em', 
        backgroundColor: '#669900', 
        color: '#ffffff'
    }, 
    'grid-1-h1': {
        marginBottom: '1em', 
        fontSize: '1.3em', 
        fontWeight: 'bold'
    }, 
    'bar-1-fb-featurebar': {
        background: '#039be5', 
        display: 'flex', 
        flexDirection: 'column', 
        flex: '0 0 auto', 
        boxShadow: '0 0 0 transparent', 
        position: 'relative', 
        transition: 'box-shadow .3s ease', 
        zIndex: '10'
    }, 
    'bar-1-fb-featurebar-main': {
        boxSizing: 'border-box', 
        position: 'relative', 
        minHeight: '36px', 
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'nowrap', 
        alignItems: 'flex-end', 
        padding: '0 56px 0 24px'
    }, 
    'bar-1-fb-featurebar-title-lockup': {
        position: 'relative', 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingRight: '20px', 
        minWidth: '0'
    }, 
    'featurebar-app-selector-container': {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        minWidth: '0'
    }, 
    'bar-1-fb-featurebar-title': {
        color: '#ffffff', 
        margin: '0', 
        fontFamily: '"Google Sans",sans-serif', 
        fontSize: '26px', 
        lineHeight: '32px', 
        fontWeight: '500', 
        overflow: 'hidden', 
        textOverflow: 'ellipsis', 
        whiteSpace: 'nowrap'
    }, 
    'twitter-bar-container': {
        minHeight: '400px', 
        width: '70%', 
        minWidth: '600px', 
        background: '#ffffff', 
        padding: '40px 20px', 
        borderRadius: '5px', 
        boxShadow: '5px 55px 50px -20px #b6b6b6'
    }, 
    'twitter-bar-ul': {
        padding: '0', 
        listStyle: 'none', 
        display: 'flex', 
        border: '1px solid red', 
        height: '46px', 
        alignItems: 'center', 
        padding: '0 10px', 
        border: '1px solid rgba(238,238,238 ,1)', 
        borderRadius: '5px', 
        color: '#484848', 
        boxShadow: '5px 10px 20px -20px rgba(85,172,238 ,1)'
    }, 
    'twitter-bar__bird': {
        marginLeft: 'auto', 
        marginRight: 'auto/*this will push aside the other flex-items and the bird takes the remaining space!*/', 
        color: '#85acee', 
        fontSize: '1.3em'
    }, 
    'twitter-bar-li': {
        cursor: 'pointer', 
        marginRight: '10px'
    }, 
    'twitter-bar-li:hover': {
        color: '#85acee'
    }, 
    'twitter-bar-li-button': {
        fontSize: '0.8em', 
        border: '0', 
        background: '#55acee', 
        color: '#ffffff', 
        borderRadius: '100px'
    }, 
    'media-object-1': {
        margin: '10px'
    }, 
    'media-object-1-bd': {
        overflow: 'hidden', 
        zoom: '1'
    }, 
    'media-object-1-img': {
        float: 'left', 
        marginRight: '10px'
    }, 
    'media-object-1-img-img': {
        display: 'block'
    }, 
    'media-object-1-imgExt': {
        float: 'right', 
        marginLeft: '10px'
    }
};

class StylesData {
    constructor() {
        this.loadStylesEditorMetaForm(stylesEditorMetaForm);
        this.loadHtmlFragments(htmlFragments);
        this.loadInitialCssRules(initialCssRules);
        this.initialize();
    }
    initialize() {
        // TODO restore from local storage
        this.selectHtmlFragment(Object.keys(this.htmlFragments)[0]);
        this.selectRule(this.selectedHtmlFragmentRuleIds[0]);
        this.selectStyleGroup(this.styleGroupIds[0]);
    }
    loadStylesEditorMetaForm(stylesEditorMetaForm) {
        this.stylesEditorMetaForm = stylesEditorMetaForm;
        this.styleGroups = {};
        this.styleGroupIds = [];
        var i, i_items=this.stylesEditorMetaForm.groups, i_len=this.stylesEditorMetaForm.groups.length, g;
        for (i=0; i<i_len; i++) {
            g = this.stylesEditorMetaForm.groups[i];
            this.styleGroups[g.id] = g;
            this.styleGroupIds.push(g.id);
            var j, j_items=g.controls, j_len=g.controls.length, control;
            for (j=0; j<j_len; j++) {
                control = g.controls[j];
                // log '<<<< control', control
                control.label = dasherize(control.label || control.id);
                control.info = createControlInfo(control.id);
            }
        }
    }
    loadHtmlFragments(htmlFragments) {
        this.htmlFragments = htmlFragments;
        this.htmlFragmentsRules = {};
        this.htmlFragmentStyles = {};
        this.cssRules = {};
        for (var fragmentId in htmlFragments) {
            // log 'loading fragment', fragmentId
            this.htmlFragmentsRules[fragmentId] = {};
            this.htmlFragmentStyles[fragmentId] = {};
            const fragment = htmlFragments[fragmentId];
            this.analizeFragment(fragment, fragmentId);
        }
        console.log('loaded cssRules', this.cssRules);
        console.log('loaded htmlFragmentsRule', this.htmlFragmentsRules);
        console.log('loaded htmlFragmentStyles', this.htmlFragmentStyles);
    }
    analizeFragment(fragment, fragmentId) {
        // log ' -- fragment', fragment
        if (fragment.class) {
            const xclasses = fragment.class.split(' ');
            var i, i_items=xclasses, i_len=xclasses.length, xclass;
            for (i=0; i<i_len; i++) {
                xclass = xclasses[i];
                if (xclass.length > 0) {
                    // log 'analizeFragment.fragmentId, xclass', fragmentId, xclass
                    this.cssRules[xclass] = {};
                    this.htmlFragmentsRules[fragmentId][xclass] = this.cssRules[xclass];
                }
            }
        }
        if (fragment.children) {
            var i, i_items=fragment.children, i_len=fragment.children.length, child;
            for (i=0; i<i_len; i++) {
                child = fragment.children[i];
                this.analizeFragment(child, fragmentId);
            }
        }
    }
    loadInitialCssRules(initialCssRules) {
        var i, i_items=Object.keys(initialCssRules), i_len=Object.keys(initialCssRules).length, ruleId;
        for (i=0; i<i_len; i++) {
            ruleId = Object.keys(initialCssRules)[i];
            // log '> loadInitialCssRules', ruleId
            if (!this.cssRules[ruleId]) {
                this.cssRules[ruleId] = {};
            }
            const ruleInitValues = initialCssRules[ruleId];
            const storedValues = this.loadRule(ruleId);
            if (!storedValues) {
                var j, j_items=Object.keys(ruleInitValues), j_len=Object.keys(ruleInitValues).length, styleId;
                for (j=0; j<j_len; j++) {
                    styleId = Object.keys(ruleInitValues)[j];
                    // log ' -- ruleId, styleId, value', ruleId, styleId, ruleInitValues[styleId]
                    this.cssRules[ruleId][styleId] = ruleInitValues[styleId];
                    this.setInitialCssStyle(ruleId, styleId, ruleInitValues[styleId]);
                }
            }
        }
        if (typeof(localStorage) !== 'undefined') {
            var i, i_items=Object.keys(this.cssRules), i_len=Object.keys(this.cssRules).length, ruleId;
            for (i=0; i<i_len; i++) {
                ruleId = Object.keys(this.cssRules)[i];
                const storedValues = this.loadRule(ruleId);
                if (storedValues) {
                    var j, j_items=Object.keys(storedValues), j_len=Object.keys(storedValues).length, styleId;
                    for (j=0; j<j_len; j++) {
                        styleId = Object.keys(storedValues)[j];
                        // log ' -- stored ruleId, styleId, value', ruleId, styleId, storedValues[styleId]
                        // set this.cssRules[ruleId][styleId] = storedValues[styleId]
                        this.setInitialCssStyle(ruleId, styleId, storedValues[styleId]);
                    }
                }
            }
        }
    }
    setInitialCssStyle(ruleId, styleId, value) {
        this.cssRules[ruleId][styleId] = value;
        var i, i_items=Object.keys(this.htmlFragmentsRules), i_len=Object.keys(this.htmlFragmentsRules).length, hfId;
        for (i=0; i<i_len; i++) {
            hfId = Object.keys(this.htmlFragmentsRules)[i];
            var j, j_items=Object.keys(this.htmlFragmentsRules[hfId]), j_len=Object.keys(this.htmlFragmentsRules[hfId]).length, hfRuleId;
            for (j=0; j<j_len; j++) {
                hfRuleId = Object.keys(this.htmlFragmentsRules[hfId])[j];
                if (hfRuleId === ruleId) {
                    this.htmlFragmentStyles[hfId][styleId] = value;
                }
            }
        }
    }
    selectRule(ruleId) {
        this.selectedRuleId = ruleId;
        this.applyRuleToStylesEditorMetaForm(ruleId);
    }
    selectStyleGroup(styleGroupId) {
        this.selectedStyleGroupId = styleGroupId;
        this.selectedStyleGroupMetaForm = this.getStylesEditorMetaFormByGroup(this.selectedStyleGroupId);
    }
    selectHtmlFragment(fragmentId) {
        this.selectedHtmlFragmentId = fragmentId;
        this.selectedHtmlFragmentRules = this.htmlFragmentsRules[fragmentId];
        this.selectedHtmlFragmentRuleIds = Object.keys(this.selectedHtmlFragmentRules);
        const ruleId = this.selectedHtmlFragmentRuleIds[0];
        this.selectRule(ruleId);
    }
    updateStyles(values) {
        const ruleId = this.selectedRuleId;
        this.storeRule(ruleId, values);
        // log 'StylesData.updateStyles.before', ruleId, this.cssRules[ruleId]
        this.cssRules[ruleId] = {
            ...this.cssRules[ruleId], 
            ...values
        };
        // log 'StylesData.updateStyles.after', ruleId, this.cssRules[ruleId]
        this.applyRuleToStylesEditorMetaForm(ruleId);
    }
    applyRuleToStylesEditorMetaForm(ruleId) {
        // A rule has been selected
        // The style editor form must be refreshed with the stored values
        // of the selected rule
        const rule = this.cssRules[ruleId];
        console.log('cssbuilder.StylesData.applyRuleToStylesEditorMetaForm.ruleId.styles', ruleId, rule);
        // scan each control of the style editor
        // one control means one style
        var i, i_items=this.stylesEditorMetaForm.groups, i_len=this.stylesEditorMetaForm.groups.length, g;
        for (i=0; i<i_len; i++) {
            g = this.stylesEditorMetaForm.groups[i];
            var j, j_items=g.controls, j_len=g.controls.length, item;
            for (j=0; j<j_len; j++) {
                item = g.controls[j];
                if (typeof(rule[item.id]) != "undefined") {
                    // a value for the style has been stored, set it
                    console.log('StylesData.applyRuleToStylesEditorMetaForm.ruleId.styleId,value', ruleId, item.id, rule[item.id]);
                    item.value = rule[item.id];
                }
                else {
                    item.value = undefined;
                }
            }
        }
    }
    getStylesEditorMetaFormByGroup(groupId) {
        return this.stylesEditorMetaForm.groups.find((group) => {
                return group.id === groupId;
            });
    }
    loadRule(ruleId) {
        if (typeof(localStorage) !== 'undefined') {
            try {
                const storedValues = localStorage.getItem("rule_values_" + ruleId);
                return storedValues ? JSON.parse(storedValues) : null;
            } 
            catch (ex) {
                return null;
            } 
        }
        else {
            return null;
        }
    }
    storeRule(ruleId, values) {
        if (typeof(localStorage) !== 'undefined') {
            localStorage.setItem("rule_values_" + ruleId, JSON.stringify(values));
        }
    }
}
function createControlInfo(controlName) {
    const dashedControlName = dasherize(controlName);
    return {
            title: 'Css style ' + dashedControlName, 
            url: '/static/en-US/docs/Web/CSS/' + dashedControlName + '.html#Syntax'
        };
}
export default StylesData;
