/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\common\mui\utils\buildFormControls.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import Control from '../Control';
export default function buildFormControls(meta, handleOnChange) {
    var originalValues = {};
    var controls = meta.controls.map((c, i) => {
        const { id, type, data, value } = c;
        console.log('buildFormControls.createdControl', id, type, data, value);
        originalValues[id] = value;
        return  (
                <Control id={id} key={id} type={type} value={value} data={data} onChangeValue={handleOnChange}>
                </Control>
            )
        ;
    });
    return {
            originalValues: originalValues, 
            controls: controls
        };
}
