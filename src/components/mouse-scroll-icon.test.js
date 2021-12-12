import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import MouseScrollIcon from "./mouse-scroll-icon";

const testOnPageLinkId = "anchor-target";

describe("MouseScrollIcon", () => {
  let component;
  beforeAll(() => {
    component = render(<MouseScrollIcon onPageLinkId={testOnPageLinkId} />);
  });

  afterAll(cleanup);

  it("renders a link", () => {
    const link = screen.getByRole("link");

    expect(link).toBeVisible();
    expect(link).toHaveAttribute("href", testOnPageLinkId);
  });

  it("onClick", () => {
    document.getElementById = jest.fn(() => element);
    const element = document.createElement("div");
    element.setAttribute("id", "onPageLinkId");
    element.scrollIntoView = jest.fn();

    const link = screen.getByRole("link");
    fireEvent.click(link);

    expect(element.scrollIntoView).toHaveBeenCalled();
  });
});
