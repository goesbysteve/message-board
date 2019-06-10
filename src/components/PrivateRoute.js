import React from "react";
import { isValidElementType } from "react-is";
import { Redirect, Route } from "react-router-dom";
import fakeAuth from "../utils/fakeAuth";

/**
 * A Higher Order Component that wraps react-router Route to extend
 * it's functionality with a route that requires authentication
 *
 * Redirects to /login if not authenticated
 * @param {Component} component the component to be wrapped
 * @param {Object} rest any props passed
 * @returns {Function} a function that can render the wrapped component
 */
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  /*
   * Check if a React Component is passed
   * Adapted from https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/Route.js#L82
   */
  component: (props, propName) => {
    if (props[propName] && !isValidElementType(props[propName])) {
      return new Error(
        `Invalid prop 'component' supplied to 'PrivateRoute': the prop is not a valid React component`
      );
    }
  }
};

export default PrivateRoute;
