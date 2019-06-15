/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\pages\data_fetch.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
const Index = (props) =>  (
        <Layout>
            <h1>
            Batman TV Shows</h1>
        
            <ul>
            {
                props.shows.map((show) =>  (
                        <li key={show.id}>
                            <Link as={`/p/${show.id}`} href={`/post_fetch?id=${show.id}`}>
                                <a>
                                {show.name}</a>
                            
                            </Link>
                        
                        </li>
                    )
                )
            }</ul>
        
        </Layout>
    )
;
Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    console.log(`Show data fetched. Count:${data.length}`);
    return {
            shows: data.map((entry) =>
                entry.show)
        };
};
export default Index;
