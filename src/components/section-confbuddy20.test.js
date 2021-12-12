import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import ConfBuddy20Section from "./section-confbuddy-20";

describe("<ConfBuddy20Section />", () => {
  let component;
  beforeAll(() => {
    component = render(<ConfBuddy20Section />);
  });

  afterAll(cleanup);

  it("shows a header", () => {
    const header = screen.getAllByRole("heading", {
      name: "Conference Buddy 2.0.",
    });

    expect(header[0]).toBeVisible();
    expect(header[1]).toBeVisible();
  });

  it("shows a form", () => {
    const form = screen.getByRole("form");

    expect(form).toBeVisible();
    expect(form).toHaveAttribute(
      "action",
      "https://buttondown.email/api/emails/embed-subscribe/conferencebuddy"
    );
  });

  it("shows an input for email address", () => {
    const input = screen.getByRole("textbox", { name: "Enter your email" });

    expect(input).toBeVisible();
  });

  it("shows submit button to subscribe", () => {
    const submitButton = screen.getByRole("button", { name: "Subscribe" });

    expect(submitButton).toBeEnabled();
  });

  it("shows all elements", () => {
    expect(component.asFragment()).toMatchSnapshot();
  });
});
