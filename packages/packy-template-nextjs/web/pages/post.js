/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\pages\post.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import {withRouter} from 'next/router';
import Layout from '../components/MyLayout.js';
const Content = withRouter((props) =>  (
        <div>
            <h1>
            {props.router.query.title}</h1>
        
            <p>
            This is the blog post content.</p>
        
        </div>
    )
);
const Page = (props) =>  (
        <Layout>
            <Content>
            </Content>
        
        </Layout>
    )
;
export default Page;
