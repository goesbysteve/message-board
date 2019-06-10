import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import LogIn from "./LogIn";
import fakeAuth from "../utils/fakeAuth"; // I realise this should be mocked

describe("LogIn component", () => {
  /* Smoke test */
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LogIn />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  /* Unit tests */
  it("username text entered is echoed", () => {
    const wrapper = shallow(<LogIn />);
    wrapper.find("#username").simulate("change", {
      target: { name: "username", value: "dummyuser" }
    });

    expect(wrapper.find("#username").props().value).toEqual("dummyuser");
  });

  it("password text entered is echoed", () => {
    const wrapper = shallow(<LogIn />);
    wrapper.find("#password").simulate("change", {
      target: { name: "password", value: "dummypassword" }
    });
    expect(wrapper.find("#password").props().value).toEqual("dummypassword");
  });

  it("authentication not set if not submitted", () => {
    const wrapper = shallow(<LogIn />);
    expect(fakeAuth.isAuthenticated).toBeFalsy();
  });

  it("authentication not set when submitted if both inputs not entered", () => {
    const wrapper = shallow(<LogIn />);
    wrapper.find("#username").simulate("change", {
      target: { name: "username", value: "" }
    });
    wrapper.find("#password").simulate("change", {
      target: { name: "password", value: "" }
    });

    const form = wrapper.find("form");
    form.simulate("submit", {
      preventDefault: event => true
    });

    expect(fakeAuth.isAuthenticated).toBeFalsy();
  });

  it("sets authentication when submitted with both inputs entered", () => {
    const wrapper = shallow(<LogIn />);
    wrapper.find("#username").simulate("change", {
      target: { name: "username", value: "dummyuser" }
    });
    wrapper.find("#password").simulate("change", {
      target: { name: "password", value: "dummypassword" }
    });

    const form = wrapper.find("form");
    form.simulate("submit", {
      preventDefault: event => true
    });

    expect(fakeAuth.isAuthenticated).toBeTruthy();
  });
});
