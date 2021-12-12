import React from "react";
import Layout from "./index";
import { render, cleanup } from "@testing-library/react";

describe("<Layout />", () => {
  afterEach(cleanup);

  it("shows all elements", () => {
    const component = render(<Layout />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
