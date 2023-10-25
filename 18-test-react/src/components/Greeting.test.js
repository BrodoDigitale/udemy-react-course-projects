import { Greeting } from "./Greeting";
import { render, screen } from "@testing-library/react";

describe("greeting component", () => {
  test("renders hello world", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...

    //Assert
    const helloWorldEl = screen.getByText("Hello world", { exact: false });
    expect(helloWorldEl).toBeInTheDocument();
  });
});