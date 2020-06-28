import React from "react";
import { Header } from "../components";
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { fireEvent, render } from "./test-utils";

it("Render header", () => {
  const { getByPlaceholderText } = render(<Header loading={false} />);

  expect(getByPlaceholderText("Search")).toBeInTheDocument();
});

it("Had message Please input to search", () => {
  const { getByText } = render(<Header loading={false} />);

  fireEvent.click(getByText("search"));

  expect(getByText("Please input to search")).toBeInTheDocument();
});

it("Can input to search input", () => {
  const { getByDisplayValue, getByPlaceholderText } = render(
    <Header loading={false} />
  );

  fireEvent.change(getByPlaceholderText("Search"), {
    target: { value: "test" },
  });

  expect(getByDisplayValue("test")).toBeTruthy();
});
