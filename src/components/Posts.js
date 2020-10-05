import React, { Component } from 'react';
import Post from './Post';
import './../assets/styles/blog.css';

class Posts extends Component {
    render() {
        const posts = this.props.posts
        return (
            <div className="posts">
                <Post id={posts.example.id} name={posts.example.name} date={posts.example.date}
                    writer={posts.example.writer} description={posts.example.description} />

                <Post id={posts.first.id} name={posts.first.name} date={posts.first.date}
                    writer={posts.first.writer} description={posts.first.description} />
            </div>
        );
    }
}

export default Posts;