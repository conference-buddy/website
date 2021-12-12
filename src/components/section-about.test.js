import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import AboutSection from "./section-about";

describe("<AboutSection />", () => {
  let component;
  beforeAll(() => {
    component = render(<AboutSection />);
  });

  afterAll(cleanup);

  it("shows a header", () => {
    const header = screen.getByRole("heading", {
      name: "What is Conference Buddy?",
    });

    expect(header).toBeVisible();
  });

  it("shows all elements", () => {
    expect(component.asFragment()).toMatchSnapshot();
  });
});
