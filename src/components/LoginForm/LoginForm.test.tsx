import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When rendered", () => {
    test("Then it should show an input with placeholder 'Email'", () => {
      const inputPlaceholder = "Email";

      renderWithProviders(<LoginForm />);
      const emailInput = screen.getByPlaceholderText(inputPlaceholder);

      expect(emailInput).toBeInTheDocument();
    });

    test("Then it should show an input with placeholder 'Password'", () => {
      const inputPlaceholder = "Password";

      renderWithProviders(<LoginForm />);

      const passwordInput = screen.getByPlaceholderText(inputPlaceholder);

      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show a button with text 'Login'", () => {
      const buttonText = "Login";

      renderWithProviders(<LoginForm />);

      const submitButton = screen.getByRole("button", { name: buttonText });

      expect(submitButton).toBeInTheDocument();
    });
  });
});
