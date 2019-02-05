import React, { Component } from 'react';
import axios from 'axios';
class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {posts: []};
    }
    componentDidMount(){
        axios.get('/api/posts').then(response => {
            this.setState({
                posts: response.data
            })
        })
    }
  render() {
    return (
      <div id="Posts">
        {this.state.posts.map((post, id) => 
            <div key={id}>
            <h1>
            {post.title}
            </h1>
            <h2>
                {post.content}
            </h2>
            </div>    
        )}
      </div>
    );
  }
}

export default Posts;
