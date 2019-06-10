import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import AddPost from "./AddPost";

const mockProps = {
  handleAddPost: () => {}
};

describe("AddPost component", () => {
  /* Smoke test */
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddPost {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  /* Unit tests */
  it("title entered is echoed", () => {
    const wrapper = shallow(<AddPost {...mockProps} />);
    wrapper.find("#title").simulate("change", {
      target: { name: "title", value: "dummytitle" }
    });

    expect(wrapper.find("#title").props().value).toEqual("dummytitle");
  });

  it("message entered is echoed", () => {
    const wrapper = shallow(<AddPost {...mockProps} />);
    wrapper.find("#message").simulate("change", {
      target: { name: "message", value: "dummymessage" }
    });

    expect(wrapper.find("#message").props().value).toEqual("dummymessage");
  });

  it("can't submit form if title & message are not entered", () => {
    const mockHandleAddPost = jest.fn(() => {});
    const wrapper = shallow(<AddPost handleAddPost={mockHandleAddPost} />);
    const form = wrapper.find("form");
    form.simulate("submit", {
      preventDefault: event => true,
      target: {
        reset: () => {}
      }
    });

    expect(mockHandleAddPost).toHaveBeenCalledTimes(0);
  });

  it("form is submitted with correct title & message", () => {
    const mockHandleAddPost = jest.fn(() => {});
    const wrapper = shallow(<AddPost handleAddPost={mockHandleAddPost} />);

    wrapper.find("#title").simulate("change", {
      target: { name: "title", value: "dummytitle" }
    });
    wrapper.find("#message").simulate("change", {
      target: { name: "message", value: "dummymessage" }
    });

    const form = wrapper.find("form");
    form.simulate("submit", {
      preventDefault: event => true,
      target: {
        reset: () => {}
      }
    });

    expect(mockHandleAddPost).toHaveBeenCalledTimes(1);
    expect(mockHandleAddPost).toHaveBeenCalledWith({
      title: "dummytitle",
      message: "dummymessage"
    });
  });
});
