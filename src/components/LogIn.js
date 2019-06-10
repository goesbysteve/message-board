import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import fakeAuth from "../utils/fakeAuth";

/**
 * Renders a form for authentication
 * @param {Object} props
 * @param {Object} props.location Web API Location object https://developer.mozilla.org/en-US/docs/Web/API/Location
 * @param {String} props.location.state.from path of URL to return back to
 * @returns {Component} a React component
 */

class LogIn extends React.Component {
  state = {
    username: "",
    password: "",
    redirectToReferrer: false
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    const { username, password } = this.state;
    event.preventDefault();
    if (username === "" || password === "") {
      return;
    }
    fakeAuth.authenticate(() => {
      fakeAuth.username = username;
      this.setState({ redirectToReferrer: true });
    });
  };
  render() {
    const { username, password, redirectToReferrer } = this.state;
    if (redirectToReferrer === true) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <section>
          <h2>Login</h2>
          <p>
            Just enter any username and password text, it isn't actually checked
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                name="username"
                id="username"
                type="text"
                placeholder="Use dummy username"
                className="form-control"
                value={username}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                name="password"
                id="password"
                type="password"
                placeholder="Use dummy password"
                className="form-control"
                value={password}
                onChange={this.handleChange}
                required
              />
            </div>
            <input type="submit" className="btn btn-primary" value="Login" />
          </form>
        </section>
      </>
    );
  }
}

LogIn.propTypes = {
  location: PropTypes.object
};

export default LogIn;
