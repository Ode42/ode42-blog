import React, { Component } from 'react';

class Posts extends Component {
    render() {
        return (
            <h1>{this.props.numOfPosts}</h1>
        );
    }
}

export default Posts;