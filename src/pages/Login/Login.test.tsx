import renderWithProviders from "../../testUtils";
import { screen } from "@testing-library/react";
import Login from "./Login";

describe("Given a Login page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Log in'", () => {
      const headingContent = "Log in";

      renderWithProviders(<Login />);

      const expectedHeading = screen.getByRole("heading", {
        name: headingContent,
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Login'", () => {
      const buttonContent = "Login";

      renderWithProviders(<Login />);

      const expectedButton = screen.getByRole("button", {
        name: buttonContent,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
