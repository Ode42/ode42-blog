import React, { Component } from 'react';
import Posts from './Posts';

class Blog extends Component {
    state = {
        "posts": {
            "example": {
                "id": 0,
                "name": "example"
            },
        }
    }
    render() {
        const numberOfPosts = Object.keys(this.state.posts).length;
        let posts = [];
        for (let i = 0; i < numberOfPosts; i++) {
            posts.push(<h1>Post</h1>)
        }


        return (
            <div className="blog">
                <h1>Number of posts:</h1>
                <Posts numOfPosts={numberOfPosts} posts={this.state.posts} />
            </div>
        );
    }
}

export default Blog;