import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../testUtils/testUtils";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a navbar", () => {
      renderRouterWithProviders(<App />);

      const expectedHeader = screen.getByRole("navigation");

      expect(expectedHeader).toBeInTheDocument();
    });

    test("Then it should show a navigation bar", () => {
      renderRouterWithProviders(<App />);

      const expextedNavigationBar = screen.getByRole("navigation");

      expect(expextedNavigationBar).toBeInTheDocument();
    });

    test("Then it should show a button with text 'Login'", () => {
      const buttonText = "Login";

      renderRouterWithProviders(<App />);

      const submitButton = screen.getByRole("button", { name: buttonText });

      expect(submitButton).toBeInTheDocument();
    });
  });
});
