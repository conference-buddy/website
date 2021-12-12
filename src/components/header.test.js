import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  let component;
  beforeAll(() => {
    component = render(<Header />);
  });

  afterAll(cleanup);

  it("renders the header element", () => {
    const header = screen.getByRole("banner");
    expect(header).toBeVisible();
  });

  it("renders all necessary elements", () => {
    expect(component.asFragment()).toMatchSnapshot();
  });
});
