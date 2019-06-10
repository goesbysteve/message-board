import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import _ from "lodash";
import firebase from "../firebase";
import App from "./App";
import Posts from "./Posts";

jest.mock("../firebase");
jest.mock("./Posts", () => () => {
  return <div>DummyPost</div>;
});

const post = {
  "post-1234": {
    author: "dummyauthor",
    title: "dummytitle",
    message: "dummymessage"
  }
};

describe("App component", () => {
  /* Smoke test */
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has no posts when there are no posts", async () => {
    firebase.setState({
      posts: {}
    });
    const wrapper = shallow(<App />);
    await wrapper.instance().componentDidMount();
    expect(wrapper.find(Posts).props().posts).toEqual({});
  });

  it("has the right posts when there are posts", async () => {
    firebase.setState({
      posts: { post }
    });
    const wrapper = shallow(<App />);
    await wrapper.instance().componentDidMount();

    expect(wrapper.find(Posts).props().posts).toEqual({ post });
  });

  it("adds a post when a post is added", async () => {
    firebase.setState({
      posts: { post }
    });
    const wrapper = shallow(<App />);
    await wrapper.instance().componentDidMount();
    wrapper.instance().addPost(post);

    expect(_.size(wrapper.find(Posts).props().posts)).toEqual(2);
  });

  // Struggled with these tests, I beleive the mock firebase.state is getting the
  // value carried from previous tests. Which makes me think the mock would be
  // better as a factory so I can create a new one for each test.
  // I'm not convienced of the testing approach I've used here however.
  it("updates a post when one is updated", () => {});

  it("deletes a post when one is deleted", async () => {});
});
