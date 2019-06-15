/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\demos\reduxForm\SubmitValidationFormSubmit.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import { SubmissionError } from 'redux-form';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
function SubmitValidationFormSubmit(values) {
    return sleep(1000).then(() => {
            if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
                throw new SubmissionError({
                        username: 'User does not exist', 
                        _error: 'Login failed!'
                    });
            }
            else if (values.password !== 'redux-form') {
                throw new SubmissionError({
                        password: 'Wrong password', 
                        _error: 'Login failed!'
                    });
            }
            else {
                window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
            }
        })
    ;
}
export default SubmitValidationFormSubmit;
