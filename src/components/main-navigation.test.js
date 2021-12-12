import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import MainNav from "./main-navigation";

describe("MainNav", () => {
  let component;
  beforeAll(() => {
    component = render(<MainNav />);
  });

  afterAll(cleanup);

  it("renders a navigation", () => {
    const nav = screen.getByRole("navigation");

    expect(nav).toBeVisible();
  });

  it("renders a link to home", () => {
    const link = screen.getByRole("link");

    expect(link).toBeVisible();
    expect(link).toHaveAttribute("href", "/");
  });

  it("renders all necessary elements", () => {
    expect(component.asFragment()).toMatchSnapshot();
  });
});
