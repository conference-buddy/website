import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import ExternalLink from "./external-link";

const testUrl = "http://conferencebuddy.io/";
const linkText = "Conference Buddy";

const requiredProps = {
  url: testUrl,
  children: linkText,
};

describe("<ExternalLink />", () => {
  describe("renders all necessary elements", () => {
    let component;
    beforeAll(() => {
      component = render(<ExternalLink {...requiredProps} />);
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

    it("renders a link with TextLink class", () => {
      const link = screen.getByRole("link", {
        name: linkText,
      });

      expect(link).toHaveClass("TextLink");
    });
  });

  describe("renders link with different classes dependent on props", () => {
    afterEach(cleanup);

    it("renders class TextLink-primary", () => {
      const component = render(
        <ExternalLink {...requiredProps} primary={true} />
      );
      const link = screen.getByRole("link", {
        name: linkText,
      });

      expect(link).toHaveClass("TextLink-primary");
      expect(component.asFragment()).toMatchSnapshot();
    });

    it("renders class TextLink-secondary", () => {
      const component = render(
        <ExternalLink {...requiredProps} secondary={true} />
      );
      const link = screen.getByRole("link", {
        name: linkText,
      });

      expect(link).toHaveClass("TextLink-secondary");
      expect(component.asFragment()).toMatchSnapshot();
    });
  });
});
