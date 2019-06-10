import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import NotFound from "./NotFound";

describe("NotFound component", () => {
  /* Smoke test */
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NotFound />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  /* Unit tests */
  it("it tells the user the url was not found", () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find("h2").text()).toEqual("Not Found!");
  });
});
