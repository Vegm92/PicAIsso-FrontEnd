import { renderRouterWithProviders } from "../../testUtils/testUtils";
import { screen } from "@testing-library/react";

import NotFoundPage from "./NotFoundPage";

describe("Given the NotFound Page", () => {
  describe("When it renders", () => {
    test("Then it should show a button with the text 'Go back Home'", () => {
      const buttonText = "Go back Home";

      renderRouterWithProviders(<NotFoundPage />);

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
