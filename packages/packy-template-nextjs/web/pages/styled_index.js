/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\pages\styled_index.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import Layout from '../components/MyLayout.js';
import Link from 'next/link';
function getPosts() {
    return [
            {
                id: 'hello-nextjs', 
                title: 'Hello Next.js'
            }, 
            {
                id: 'learn-nextjs', 
                title: 'Learn Next.js is awesome'
            }, 
            {
                id: 'deploy-nextjs', 
                title: 'Deploy apps with ZEIT'
            }
        ];
}
const PostLink = ({post}) =>  (
        <li>
            <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
                <a>
                {post.title}</a>
            
            </Link>
        
        <style jsx>{`
            li {
                list-style: none;
                margin: 5px 0;
            }
            a {
                text-decoration: none;
                color: blue;
                font-family: 'Arial';
            }
            a:hover {
                opacity: 0.6;
            }
        `}</style>
        </li>
    )
;
export default function Blog() {
        return  (
                <Layout>
                    <h1>
                    My Blog</h1>
                
                    <ul>
                    {
                        getPosts().map((post) =>  (
                                <PostLink key={post.id} post={post}>
                                </PostLink>
                            )
                        )
                        
                    }</ul>
                
                <style jsx>{`
                    h1, a {
                        font-family: 'Arial';
                    }
                    ul {
                        padding: 0;
                    }
                    li {
                        list-style: none;
                        margin: 5px 0;
                    }
                    a {
                        text-decoration: none;
                        color: blue;
                    }
                    a:hover {
                        opacity: 0.6;
                    }
                `}</style>
                </Layout>
            )
        ;
    }
