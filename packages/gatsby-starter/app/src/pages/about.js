/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\gatsby-starter\.wizzi\src\pages\about.js.ittf
*/
'use strict';
import React from "react";
export default ({ data }) => {
    return  (
            <div>
                <h1>
                About {data.site.siteMetadata.title}
                </h1>
            
            </div>
        )
    ;
}
export const query = graphql`
    query AboutQuery {
        site {
            siteMetadata {
                title
            }
        }}
`
