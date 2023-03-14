import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/testUtils";
import { UiState } from "../../types/uiTypes";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a navigation bar", () => {
      renderRouterWithProviders(<Layout />);

      const navigationBar = screen.getByRole("navigation");

      expect(navigationBar).toBeInTheDocument();
    });

    test("Then it should show a loader if the status isLoading is true", () => {
      const uiState: UiState = {
        feedback: { isError: false, isSuccess: false, message: "" },
        isLoading: true,
      };

      renderRouterWithProviders(<Layout />, { ui: uiState });

      const labelText = "The page is loading";

      const expectedLabel = screen.getByLabelText(labelText);

      expect(expectedLabel).toBeInTheDocument();
    });
  });
});
