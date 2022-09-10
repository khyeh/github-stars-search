import App from "./App";
import { render } from "@testing-library/react";

describe("App", () => {
  it("renders the App title", () => {
    const { getByText } = render(<App />);
    getByText("Vite + React");
  });
});
