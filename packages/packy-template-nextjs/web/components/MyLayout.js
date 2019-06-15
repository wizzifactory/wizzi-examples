/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\components\MyLayout.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import Header from './Header';
const layoutStyle = {
    margin: 20, 
    padding: 20, 
    border: '1px solid #DDD'
};
const Layout = (props) =>  (
        <div style={layoutStyle}>
            <Header>
            </Header>
        
        {props.children}</div>
    )
;
export default Layout;
