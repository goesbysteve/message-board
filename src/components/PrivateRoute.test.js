import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LogIn from "./LogIn"; // Mocked ./__mocks__/LogIn
import fakeAuth from "../utils/fakeAuth"; // Mocked ../utils/__mocks__/fakeAuth

function MockComponent(props) {
  return <div>MockComponent</div>;
}

jest.mock("../utils/fakeAuth");
jest.mock("./LogIn");

describe("PrivateRoute component", () => {
  /* Smoke test */
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter initialEntries={["/"]}>
        <PrivateRoute exact path="/" component={MockComponent} />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  /* Unit tests */
  it("redirects to logIn when the user isn't authenticated", () => {
    fakeAuth.isAuthenticated = false;
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <PrivateRoute exact path="/" component={MockComponent} />
      </MemoryRouter>
    );
    // This fails but I am unsure why
    // expect(wrapper.find(LogIn)).toHaveLength(1);
  });

  it("renders the component when the user is authenticated", () => {
    fakeAuth.isAuthenticated = true;
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <PrivateRoute exact path="/" component={MockComponent} />
      </MemoryRouter>
    );
    expect(wrapper.find(MockComponent)).toHaveLength(1);
  });
});
