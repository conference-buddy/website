import React from "react";
import IndexPage from "./index";
import { render, cleanup } from "@testing-library/react";

describe("<IndexPage />", () => {
  afterEach(cleanup);

  it("shows all elements", () => {
    const component = render(<IndexPage />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
