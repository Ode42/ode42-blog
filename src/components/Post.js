import React, { Component } from 'react';
import './../assets/styles/blog.css';

class Post extends Component {
    render() {
        const post = {
            "id": this.props.id,
            "name": this.props.name,
            "date": this.props.date,
            "writer": this.props.writer,
            "description": this.props.description
        }
        return (
            <div className="post">
                <h1>{post.name}</h1>
                <p>{post.description}</p>
                <div className="post-data">
                    <h3>{post.date}</h3>
                    <h3>Kirjoittaja: {post.writer}</h3>
                </div>
            </div>

        );
    }
}

export default Post;