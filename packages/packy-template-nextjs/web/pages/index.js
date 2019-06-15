/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\pages\index.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
// This is the Link API
import Link from 'next/link';
import Layout from '../components/MyLayout.js';
import Header from '../components/Header';
const PostLink = (props) =>  (
        <li>
            <Link href={`/post?title=${props.title}`}>
                <a>
                {props.title}</a>
            
            </Link>
        
        </li>
    )
;
export default function Blog() {
        return  (
                <div>
                    <Layout>
                        <h1>
                        My Blog</h1>
                    
                        <ul>
                            <PostLink title="Hello Next.js">
                            </PostLink>
                        
                            <PostLink title="Learn Next.js is awesome">
                            </PostLink>
                        
                            <PostLink title="Deploy apps with Zeit">
                            </PostLink>
                        
                        </ul>
                    
                    </Layout>
                
                    <Layout>
                        <p>
                        Hello Next.js</p>
                    
                        <div>
                            <Header>
                            </Header>
                        
                            <p>
                            Hello Next.js
                            </p>
                        
                            <div href="https://nextjs.org/docs/#routing">
                                <Link href="/about">
                                    <a>
                                    About Page</a>
                                
                                </Link>
                            
                                <Link href="/about" title="About Page">
                                    <a>
                                    About Page</a>
                                
                                </Link>
                            
                                <Link href="/about">
                                    <button>
                                    Go to About Page</button>
                                
                                </Link>
                            
                                <a>
                                Routing doc
                                </a>
                            
                            </div>
                        
                        </div>
                    
                    </Layout>
                
                </div>
            )
        ;
    }
