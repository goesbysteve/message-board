import React from "react";
import ReactDOM from "react-dom";
import { shallow, render } from "enzyme";
import Post from "./Post";

const mockProps = {
  post: { title: "dummytitle", message: "dummymessage", author: "dummyauthor" },
  id: "post-1234",
  handleUpdatePost: () => {},
  handleDeletePost: () => {},
  isAuthenticated: false
};

describe("Post component", () => {
  /* Smoke test */
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Post {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  /* Unit tests */
  it("displays a post with the correct text", () => {
    const wrapper = render(<Post {...mockProps} />);
    expect(wrapper.find(".post__title").text()).toEqual("dummytitle");
    expect(wrapper.find(".post__message").text()).toEqual("dummymessage");
    expect(wrapper.find(".post__author").text()).toEqual("dummyauthor");
  });

  it("does not allow a post to be edited if the user isn't authorised", () => {
    const wrapper = shallow(<Post {...mockProps} />);
    expect(wrapper.find(".post__edit").exists()).toEqual(false);
  });

  it("does allow a post to be edited if the user is authorised", () => {
    const mockPropsIsAuthenticated = { ...mockProps, isAuthenticated: true };
    const wrapper = shallow(<Post {...mockPropsIsAuthenticated} />);
    expect(wrapper.find(".post__edit").exists()).toEqual(true);
  });

  it("does not allow a post to be deleted if the user isn't authorised", () => {
    const wrapper = shallow(<Post {...mockProps} />);
    expect(wrapper.find(".post__delete").exists()).toEqual(false);
  });

  it("does allow a post to be deleted if the user is authorised", () => {
    const mockPropsIsAuthenticated = { ...mockProps, isAuthenticated: true };
    const wrapper = shallow(<Post {...mockPropsIsAuthenticated} />);
    expect(wrapper.find(".post__delete").exists()).toEqual(true);
  });
});
