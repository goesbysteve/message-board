import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import App from "./App";
import NotFound from "./NotFound";
import LogIn from "./LogIn";

/**
 * Routes for the App
 * @returns {Component} a react-router BrowserRoute React component
 */
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LogIn} />
      <PrivateRoute exact path="/" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
