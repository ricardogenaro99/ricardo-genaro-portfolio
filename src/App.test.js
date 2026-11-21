import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio title", () => {
  render(<App />);
  const linkElement = screen.getByText(/ricardo-genaro/i);
  expect(linkElement).toBeInTheDocument();
});
