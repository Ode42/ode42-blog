import React, { Component } from 'react';
import Posts from './Posts';
import './../assets/styles/blog.css';

class Blog extends Component {
    state = {
        "posts": {
            "example": {
                "id": 0,
                "name": "example",
                "description": `
                This is example post`,
                "date": "4.10.2020",
                "writer": "Author"

            },
            "first": {
                "id": 1,
                "name": "first post",
                "description": `
                This is Ode42 blog's first post!`,
                "date": "4.10.2020",
                "writer": "Otso"
            }
        }
    }
    render() {
        const numberOfPosts = Object.keys(this.state.posts).length;


        return (
            <div className="blog">
                <h1>Posts:</h1>
                <Posts numOfPosts={numberOfPosts} posts={this.state.posts} />
            </div>
        );
    }
}

export default Blog;