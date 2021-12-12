import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import Footer from "./footer";

const cardTitle = "A card title";
const requiredProps = {
  title: cardTitle,
  subtitle: "subtitle",
  children: "<div>hello</div>",
  disclaimerText: "disclaimer text",
};
describe("<Footer />", () => {
  let component;
  beforeAll(() => {
    component = render(<Footer {...requiredProps} />);
  });

  afterAll(cleanup);

  it("shows a footer element", () => {
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeVisible();
  });

  it("renders a link to privacy policy", () => {
    const link = screen.getByRole("link", {
      name: "Privacy Policy",
    });
    expect(link).toBeVisible();
  });

  it("renders all necessary elements", () => {
    expect(component.asFragment()).toMatchSnapshot();
  });
});
