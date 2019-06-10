import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import EditPost from "./EditPost";

const mockProps = {
  post: { title: "", message: "", author: "" },
  id: "post-1234",
  handleUpdatePost: () => {},
  handleCancel: () => {}
};

describe("EditPost component", () => {
  /* Smoke test */
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<EditPost {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  /* Unit tests */
  it("title entered is echoed", () => {
    const wrapper = shallow(<EditPost {...mockProps} />);
    wrapper.find("#title").simulate("change", {
      target: { name: "title", value: "dummytitle" }
    });

    expect(wrapper.find("#title").props().value).toEqual("dummytitle");
  });

  it("message entered is echoed", () => {
    const wrapper = shallow(<EditPost {...mockProps} />);
    wrapper.find("#message").simulate("change", {
      target: { name: "message", value: "dummymessage" }
    });

    expect(wrapper.find("#message").props().value).toEqual("dummymessage");
  });

  it("can't submit form if title & message are not entered", () => {
    const mockHandleUpdatePost = jest.fn(() => {});
    const mockPropsWithMockHandle = {
      ...mockProps,
      handleUpdatePost: mockHandleUpdatePost
    };
    const wrapper = shallow(<EditPost {...mockPropsWithMockHandle} />);
    wrapper.find("#title").simulate("change", {
      target: { name: "title", value: "" }
    });
    wrapper.find("#message").simulate("change", {
      target: { name: "message", value: "" }
    });
    const form = wrapper.find("form");
    form.simulate("submit", {
      preventDefault: event => true,
      target: {
        reset: () => {}
      }
    });

    expect(mockHandleUpdatePost).not.toHaveBeenCalled();
  });

  it("form is submitted with correct title & message", () => {
    const mockHandleUpdatePost = jest.fn(() => {});
    const mockPropsWithMockHandle = {
      ...mockProps,
      handleUpdatePost: mockHandleUpdatePost
    };
    const wrapper = shallow(<EditPost {...mockPropsWithMockHandle} />);
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

    expect(mockHandleUpdatePost).toHaveBeenCalledTimes(1);
    expect(mockHandleUpdatePost).toHaveBeenCalledWith(
      {
        title: "dummytitle",
        message: "dummymessage"
      },
      mockProps.id
    );
  });
});
