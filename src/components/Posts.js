import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";
import WithAuthentication from "./WithAuthentication";

/**
 * Renders a list of posts
 * @param {Object} posts a list of posts
 * @param {Object} posts.post a message board post
 * @param {String} posts.post.title the post's title
 * @param {String} posts.post.message the post's message body
 * @param {String} posts.post.author the post's author
 * @param {Function} handleUpdatePost handler to update a post @see App.updatePost
 * @param {Function} handleDeletePost handler to delete a post @see App.deletePost
 * @returns {Component} A React Component
 */
function Posts({ posts, handleUpdatePost, handleDeletePost }) {
  const PostWithAuthentication = WithAuthentication(Post);

  return (
    <ol className="post-list">
      {Object.keys(posts).map(key => (
        <li key={key}>
          <PostWithAuthentication
            id={key}
            post={posts[key]}
            handleDeletePost={handleDeletePost}
            handleUpdatePost={handleUpdatePost}
          />
        </li>
      ))}
    </ol>
  );
}

Posts.propTypes = {
  posts: PropTypes.object,
  handleUpdatePost: PropTypes.func.isRequired,
  handleDeletePost: PropTypes.func.isRequired
};

export default Posts;
