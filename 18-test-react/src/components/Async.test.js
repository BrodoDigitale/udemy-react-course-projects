import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async component test', () => {
    test('renders data if request succeeds', async () => {
      //Arrange
      render(<Async />);

      //Act - no steps
      //Assert

      const listItems = await screen.findAllByRole("listitem", {}, 3000);
      expect(listItems).not.toHaveLength(0);
    });
})