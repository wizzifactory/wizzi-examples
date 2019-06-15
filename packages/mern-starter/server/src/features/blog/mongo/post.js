/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\mern-starter\.wizzi\server\src\features\blog\mongo\post.js.ittf
*/
'use strict';
import { Schema, model } from "mongoose";
const Post = new Schema({
    title: {
        type: String
    }, 
    content: {
        type: String
    }, 
    author: {
        type: String
    }
}, {
    collection: 'posts'
});
let postModel = null;
export function GetPostModel() {
    return postModel;
}
export const PostModelBuilder = {
    buildModel: () =>
        postModel = model('Post', Post)
};
