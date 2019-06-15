/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\services\user.js.ittf
*/
'use strict';
import users from 'components/demo_05/data/users';
import orders from 'components/demo_05/data/orders';
function lookupUser(user) {
    const userCopy = JSON.parse(JSON.stringify(user));
    const userOrders = userCopy.orders.map((id) =>
        orders.find((order) =>
            order.id === id));
    const userMoneySpent = userCopy.orders.reduce((total, order) =>
        total + order.amount, 0);
    userCopy.orders = userOrders;
    userCopy.moneySpent = userMoneySpent;
    return userCopy;
}
export const getUsers = (limit = 10) => {
    return new Promise((resolve) =>
            setTimeout(() => {
                const usersLookup = users.slice(0, limit).map(lookupUser);
                resolve({
                    users: usersLookup, 
                    usersTotal: users.length
                });
            }, 700));
};
export const getUser = (id) => {
    return new Promise((resolve, reject) =>
            setTimeout(() => {
                const user = users.find((user) =>
                    user.id === id);
                if (user) {
                    resolve({
                        user: lookupUser(user)
                    });
                }
                else {
                    reject({
                        error: 'User not found'
                    });
                }
            }, 500));
};
