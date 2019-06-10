import React from "react";
import AddPost from "./AddPost";
import firebase from "../firebase.js";

import "../styles/App.scss";
import Posts from "./Posts";

/**
 * Main component that renders the messageboard App
 * @returns {Component} a React component
 */
class App extends React.Component {
  state = {
    posts: {}
  };
  componentDidMount() {
    this.ref = firebase.syncState("message-board/posts", {
      context: this,
      state: "posts"
    });
  }
  componentWillUnmount() {
    firebase.removeBinding(this.ref);
  }
  addPost = post => {
    const posts = { ...this.state.posts };
    posts[`post-${Date.now()}`] = { ...post, author: "stevegibbings" };
    this.setState({ posts });
  };
  updatePost = (post, id) => {
    const posts = { ...this.state.posts };
    posts[id] = post;
    this.setState({ posts });
  };
  deletePost = key => {
    const posts = { ...this.state.posts };
    // Firebase requires the object to be set to null rather than deleted
    posts[key] = null;
    this.setState({ posts });
  };
  render() {
    return (
      <div className="App">
        <h1>Message board</h1>
        <section>
          <Posts
            posts={this.state.posts}
            handleUpdatePost={this.updatePost}
            handleDeletePost={this.deletePost}
          />
        </section>
        <aside>
          <AddPost handleAddPost={this.addPost} />
        </aside>
      </div>
    );
  }
}

export default App;
