import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import CardSpecialOffer from "./card-special-offer";

const cardTitle = "A card title";
const requiredProps = {
  title: cardTitle,
  subtitle: "subtitle",
  children: "<div>hello</div>",
  disclaimerText: "disclaimer text",
};
describe("<CardSpecialOffer />", () => {
  let component;
  beforeAll(() => {
    component = render(<CardSpecialOffer {...requiredProps} />);
  });

  afterAll(cleanup);

  it("shows a header for the card", () => {
    const header = screen.getByRole("heading", {
      name: `🔥 ${cardTitle} 🔥`,
    });

    expect(header).toBeVisible();
  });

  it("shows all elements", () => {
    expect(component.asFragment()).toMatchSnapshot();
  });
});
