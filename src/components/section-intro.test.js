import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import IntroSection from "./section-intro";

describe("<IntroSection />", () => {
  let component;
  beforeAll(() => {
    component = render(<IntroSection />);
  });

  afterAll(cleanup);

  it("shows a header", () => {
    const header = screen.getByRole("heading", {
      name: "Conference Buddy",
    });

    expect(header).toBeVisible();
  });

  it("shows all elements", () => {
    expect(component.asFragment()).toMatchSnapshot();
  });
});
