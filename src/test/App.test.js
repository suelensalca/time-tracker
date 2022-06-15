import { render } from "@testing-library/react";
import App from "../App";
import { shallow } from "enzyme";

describe("Crystal component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should have a div with Walters Name", () => {
    expect(wrapper.find("div").text()).toContain("Walter White");
  });
});
