import React from "react";
import NotFoundPage from "./404";
import { render, cleanup } from "@testing-library/react";

describe("<NotFoundPage />", () => {
  afterEach(cleanup);

  it("shows all elements", () => {
    const component = render(<NotFoundPage />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
