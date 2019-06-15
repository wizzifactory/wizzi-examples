/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\common\mui\utils\createControlComponent.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import { Input, Select, Range } from '../controlTypes';
export default function createControlComponent(type) {
    const inputTypes = [
        'checkbox', 
        'color', 
        'date', 
        'datetime', 
        'datetime-local', 
        'email', 
        'file', 
        'hidden', 
        'month', 
        'number', 
        'password', 
        'radio', 
        'range', 
        'search', 
        'tel', 
        'text', 
        'time', 
        'url', 
        'week'
    ];
    const inputButtons = [
        'button', 
        'reset', 
        'submit', 
        'image'
    ];
    var ret;
    if (inputTypes.indexOf(type) > -1) {
        ret = Input(type);
    }
    else if (type === 'select') {
        ret = Select();
    }
    else if (type === 'range') {
        ret = Range();
    }
    else {
        throw new Error('Control type not managed: ' + type);
    }
    // log 'createComponent.ret', ret
    return ret;
}
