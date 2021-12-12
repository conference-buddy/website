import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import ButtonExternalLink from "./button-external-link";

const testUrl = "http://forum.conferencebuddy.io/";

const linkText = "Test Button Linktext";
const linkImage = <img src="test.jpg" />;

const requiredProps = {
  url: testUrl,
  children: linkText,
};

describe("<ButtonExternalLink />", () => {
  describe("renders all necessary elements", () => {
    let component;
    beforeAll(() => {
      component = render(<ButtonExternalLink {...requiredProps} />);
    });

    afterAll(cleanup);

    it("renders a link with a given url", () => {
      const link = screen.getByRole("link", {
        name: linkText,
      });

      expect(link).toHaveAttribute("href", testUrl);
    });

    it("renders a link with a given linkText", () => {
      const link = screen.getByRole("link", {
        name: linkText,
      });

      expect(link).toHaveAccessibleName(linkText);
    });

    it("renders a link with the btn and btn-custom class by default", () => {
      const link = screen.getByRole("link", {
        name: linkText,
      });

      expect(link).toHaveClass("btn", "btn-custom");
    });
  });

  describe("renders button with different classes dependent on props", () => {
    afterEach(cleanup);

    it("renders class btn-custom-small", () => {
      const component = render(
        <ButtonExternalLink {...requiredProps} small={true} />
      );
      const link = screen.getByRole("link", {
        name: linkText,
      });

      expect(link).toHaveClass("btn-custom-small");
      expect(component.asFragment()).toMatchSnapshot();
    });

    it("renders class btn-primary", () => {
      const component = render(
        <ButtonExternalLink {...requiredProps} primary={true} />
      );
      const link = screen.getByRole("link", {
        name: linkText,
      });

      expect(link).toHaveClass("btn-primary");
      expect(component.asFragment()).toMatchSnapshot();
    });

    it("renders class btn-secondary", () => {
      const component = render(
        <ButtonExternalLink {...requiredProps} secondary={true} />
      );
      const link = screen.getByRole("link", {
        name: linkText,
      });

      expect(link).toHaveClass("btn-secondary");
      expect(component.asFragment()).toMatchSnapshot();
    });
  });
});
