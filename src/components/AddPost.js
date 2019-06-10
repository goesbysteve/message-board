import React from "react";
import PropTypes from "prop-types";

/**
 * Renders a form to add new posts.
 * @param {Function} handleAddPost a function that can be called to add a new post
 * @returns {Component} a React component
 */
function AddPost({ handleAddPost }) {
  const [post, setPost] = React.useState({ title: "", message: "" });
  const { title, message } = post;

  function handleChange(event) {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (title === "" || message === "") return;
    handleAddPost(post);
    event.target.reset();
  }
  function handleReset(event) {
    setPost({ title: "", message: "" });
  }
  return (
    <>
      <h2 className="h4">Create a new post</h2>
      <form onSubmit={handleSubmit} onReset={handleReset}>
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
        <input type="submit" className="btn btn-primary" value="Add Post" />
      </form>
    </>
  );
}

AddPost.propTypes = {
  handleAddPost: PropTypes.func.isRequired
};

export default AddPost;
