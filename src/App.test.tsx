import React from "react";
import App from "./App";
import { it, describe } from "vitest";

import { render } from "@testing-library/react";

describe("App", () => {
  it("renders the App title", () => {
    const { getByText } = render(<App />);
    getByText("Top Github Repositories by User");
  });
});
