import React from "react";
import PropTypes from "prop-types";
import EditPost from "./EditPost";

/**
 * Renders a post including edit controls to update and delete
 * This Component is wrapped by WithAuthentication to provide authentication support
 * @param {Object} post a message board post
 * @param {String} post.title the post's title
 * @param {String} post.message the post's message body
 * @param {String} post.author the post's author
 * @param {String} id key for the post
 * @param {Function} handleUpdatePost handler to update a post @see App.updatePost
 * @param {Function} handleDeletePost handler to delete a post @see App.deletePost
 * @param {Bool} isAuthenticated indicates if the user has been authenticated
 * @returns {Component} a React component
 */
function Post({
  post,
  id,
  handleUpdatePost,
  handleDeletePost,
  isAuthenticated = false
}) {
  const [isEditting, setIsEditting] = React.useState(false);
  function enhancedHandleUpdatePost(...rest) {
    setIsEditting(false);
    handleUpdatePost(...rest);
  }
  function handleCancel() {
    setIsEditting(false);
  }
  function renderEditComponents() {
    return (
      <>
        <button
          className="btn btn-primary btn-sm post__edit"
          onClick={() => setIsEditting(true)}
        >
          Edit Post
        </button>
        <button
          className="close post__delete"
          onClick={() => handleDeletePost(id)}
        >
          &times;
        </button>
      </>
    );
  }

  function renderPost() {
    if (isEditting) {
      return (
        <EditPost
          post={post}
          handleUpdatePost={enhancedHandleUpdatePost}
          handleCancel={handleCancel}
          id={id}
        />
      );
    }
    return (
      <>
        <h3 className="post__title">{title}</h3>
        <p className="post__message text-left">{message}</p>
        <p className="text-left">
          by <span className="post__author">{author}</span>
        </p>
        {isAuthenticated && renderEditComponents()}
      </>
    );
  }

  const { author, title, message } = post;
  return (
    <article>
      <div className="card">
        <div className="post card-body">{renderPost()}</div>
      </div>
    </article>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }).isRequired,
  id: PropTypes.string.isRequired,
  handleUpdatePost: PropTypes.func.isRequired,
  handleDeletePost: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

export default Post;
