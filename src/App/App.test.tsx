import { screen } from "@testing-library/react";
import { renderWithProviders } from "../testUtils";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a navbar", () => {
      renderWithProviders(<App />);

      const expectedHeader = screen.getByRole("navigation");

      expect(expectedHeader).toBeInTheDocument();
    });

    test("Then it should show a navigation bar", () => {
      renderWithProviders(<App />);

      const expextedNavigationBar = screen.getByRole("navigation");

      expect(expextedNavigationBar).toBeInTheDocument();
    });

    test("Then it should show a button with text 'Login'", () => {
      const buttonText = "Login";

      renderWithProviders(<App />);

      const submitButton = screen.getByRole("button", { name: buttonText });

      expect(submitButton).toBeInTheDocument();
    });
  });
});
