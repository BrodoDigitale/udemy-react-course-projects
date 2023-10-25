import { Greeting } from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"

describe("greeting component", () => {
  test("renders hello world", () => {
    render(<Greeting />);
    const helloWorldEl = screen.getByText("Hello world", { exact: false });
    expect(helloWorldEl).toBeInTheDocument();
  });

  test("button NOT clicked", () => {
    render(<Greeting />);
    const button = screen.getByText("Button", { exact: true });
    expect(button).toBeInTheDocument();
  });

  test("button clicked", () => {
    render(<Greeting />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    const buttonWithNewText = screen.getByText("Text changed", { exact: true });
    expect(buttonWithNewText).toBeInTheDocument();
  });
});
