/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\services\product.js.ittf
*/
'use strict';
// Mock data
import products from 'components/demo_05/data/products';
export const getProducts = (limit = 6) => {
    return new Promise((resolve) =>
            setTimeout(() =>
                resolve({
                    products: products.slice(0, limit), 
                    productsTotal: products.length
                }), 700));
};
