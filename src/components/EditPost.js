import React from "react";
import PropTypes from "prop-types";

/**
 * Renders a form to allow a post to be editted
 * @param {Object} post a message board post
 * @param {String} post.title the post's title
 * @param {String} post.message the post's message body
 * @param {String} post.author the post's author
 * @param {String} id key for the post
 * @param {Function} handleUpdatePost handler to update a post @see App.updatePost
 * @param {Function} handleCancel handler to cancel editting
 * @returns {Component} a React component
 */
function EditPost({ post: currentPost, id, handleUpdatePost, handleCancel }) {
  const { title: currentTitle, message: currentMessage } = currentPost;
  const [post, setPost] = React.useState({
    title: currentTitle,
    message: currentMessage
  });
  const { title, message } = post;

  function handleChange(event) {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (title === "" || message === "") return;
    handleUpdatePost(post, id);
    event.target.reset();
  }
  function handleCancelClick(event) {
    event.preventDefault();
    handleCancel();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          name="title"
          id="title"
          type="text"
          placeholder="Post title"
          className="form-control"
          value={title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          id="message"
          placeholder="Type message"
          className="form-control"
          value={message}
          onChange={handleChange}
          required
        />
      </div>
      <input type="submit" className="btn btn-success" value="Update Post" />
      <input
        type="button"
        className="btn btn-warning ml-3"
        value="Cancel"
        onClick={handleCancelClick}
      />
    </form>
  );
}

EditPost.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }).isRequired,
  id: PropTypes.string.isRequired,
  handleUpdatePost: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
};

export default EditPost;
