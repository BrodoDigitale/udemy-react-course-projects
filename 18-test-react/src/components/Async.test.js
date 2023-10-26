import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component test", () => {
  test("renders data if request succeeds", async () => {
    //Arrange
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", name: "first post" }],
    });
    render(<Async />);

    //Act - no steps
    //Assert
    const listItems = await screen.findAllByRole("listitem", {}, 3000);
    expect(listItems).not.toHaveLength(0);
  });
});
