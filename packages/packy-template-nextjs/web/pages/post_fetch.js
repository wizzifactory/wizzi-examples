/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\pages\post_fetch.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';
const Post = (props) =>  (
        <Layout>
            <h1>
            {props.show.name}</h1>
        
            <p>
            {props.show.summary.replace(/<[/]?p>/g, '')}</p>
        
            <img src={props.show.image.medium}>
            </img>
        
        </Layout>
    )
;
Post.getInitialProps = async function(context) {
    const {
        id
    } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();
    console.log(`Fetched show:${show.name}`);
    return {
            show
        };
};
export default Post;
