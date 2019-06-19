/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\wizzi-starter-nextjs\.wizzi\src\pages\data_fetch.js.ittf
*/
'use strict';
import DefaultLayout from 'layouts/DefaultLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
const DataFetch = (props) =>  (
        <DefaultLayout>
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
        
        </DefaultLayout>
    )
;
DataFetch.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    console.log(`Show data fetched. Count:${data.length}`);
    return {
            shows: data.map((entry) =>
                entry.show)
        };
};
export default DataFetch;
