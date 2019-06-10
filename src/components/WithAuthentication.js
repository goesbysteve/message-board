import React from "react";
import fakeAuth from "../utils/fakeAuth";

/**
 * A Higher Order Component to wrap component to inject a prop indicating
 * authentication status
 *
 * @param {Component} Component the component to be wrapped
 * @param {Object} props any props passed
 * @returns {Function} a function that can render the wrapped component
 */
const WithAuthentication = Component => props => {
  return <Component isAuthenticated={fakeAuth.isAuthenticated} {...props} />;
};

export default WithAuthentication;
