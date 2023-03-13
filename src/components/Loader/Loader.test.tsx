import { renderWithProviders } from "../../testUtils/testUtils";
import Loader from "./Loader";
import { screen } from "@testing-library/react";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a loader with the aria-label attribute 'The page is loading'", () => {
      const labelText = "The page is loading";

      renderWithProviders(<Loader />);

      const expectedLabel = screen.getByLabelText(labelText);

      expect(expectedLabel).toBeInTheDocument();
    });
  });
});
