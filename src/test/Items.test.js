import React from "react";
import { Items } from "../components";
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render } from "./test-utils";

it("Render tabs", () => {
  const { getByText } = render(<Items loading={false} />);

  expect(getByText("Nothing here!")).toBeInTheDocument();
});
