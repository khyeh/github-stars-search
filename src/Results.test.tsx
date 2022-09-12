import React from "react";
import Results from "./Results";
import { it, describe, vi } from "vitest";

import { render } from "@testing-library/react";
import PaginationButtons from "./PaginationButtons";

const resultsFixture = [
  {
    id: 1,
    name: "react",
    url: "url_to_react_repo",
    stargazers_count: 9999,
  },
];

describe("Results", () => {
  const TestComponent = ({ ...propOverrides }) => {
    return (
      <Results results={resultsFixture} currentPage={1} {...propOverrides}>
        <PaginationButtons
          onPrev={vi.fn()}
          onNext={vi.fn()}
          currentPage={1}
          {...propOverrides}
        />
      </Results>
    );
  };

  it("renders results when there are results", () => {
    const { getByText } = render(<TestComponent />);
    getByText("react");
  });

  it("does not render the prev button on the first page", () => {
    const props = {
      currentPage: 1,
    };
    const { queryByRole } = render(<TestComponent {...props} />);
    expect(queryByRole("button", { name: "nextButton" })).toBeDefined();
    expect(queryByRole("button", { name: "prevButton" })).toBeNull();
  });

  it("renders both buttons when not on the first page", () => {
    const props = {
      currentPage: 2,
    };
    const { queryByRole } = render(<TestComponent {...props} />);
    expect(queryByRole("button", { name: "prevButton" })).toBeDefined();
    expect(queryByRole("button", { name: "nextButton" })).toBeDefined();
  });

  it("renders the correct rank when not in the first page", () => {
    const props = {
      currentPage: 3,
      results: Array(100).fill(resultsFixture[0]),
    };
    const { getByText } = render(<TestComponent {...props} />);
    getByText("71.");
  });
});
