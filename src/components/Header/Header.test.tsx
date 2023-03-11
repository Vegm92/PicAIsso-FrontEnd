import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/testUtils";

import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a navbar", () => {
      renderRouterWithProviders(<Header />);

      const expectedHeader = screen.getByRole("navigation");

      expect(expectedHeader).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Login'", () => {
      const buttonText = "Login";

      renderRouterWithProviders(<Header />);

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
