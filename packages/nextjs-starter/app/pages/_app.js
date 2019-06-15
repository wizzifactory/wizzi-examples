/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\nextjs-starter\.wizzi\src\pages\_app.js.ittf
*/
'use strict';
import React from "react";
import App, {Container} from "next/app";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
export default class NextjsApp extends App {
        constructor() {
            super();
        }
        static async getInitialProps({Component, ctx}) {
            let pageProps = {};
            if (Component.getInitialProps) {
                pageProps = await Component.getInitialProps(ctx);
            }
            return {
                    pageProps
                };
        }
        renderHead() {
            return  (
                    <Head>
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        </meta>
                    
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
                        </link>
                    
                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
                        </link>
                    
                    </Head>
                )
            ;
        }
        render() {
            const {
                Component, 
                pageProps
            } = this.props;
            return  (
                    <Container>
                    {
                        this.renderHead()
                    }<CssBaseline>
                        </CssBaseline>
                    
                        <Component {...pageProps}>
                        </Component>
                    
                    </Container>
                )
            ;
        }
    }
