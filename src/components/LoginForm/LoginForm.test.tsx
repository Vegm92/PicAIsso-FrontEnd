import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme, { picAissoTheme } from "../../styles/themes";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  const chakraProvider = (
    <ThemeProvider theme={theme}>
      <ChakraProvider theme={picAissoTheme}>
        <LoginForm />
      </ChakraProvider>
    </ThemeProvider>
  );

  describe("When rendered", () => {
    test("Then it should show an input with placeholder 'Email'", () => {
      const inputPlaceholder = "Email";

      render(chakraProvider);
      const emailInput = screen.getByPlaceholderText(inputPlaceholder);

      expect(emailInput).toBeInTheDocument();
    });

    test("Then it should show an input with placeholder 'Password'", () => {
      const inputPlaceholder = "Password";

      render(chakraProvider);

      const passwordInput = screen.getByPlaceholderText(inputPlaceholder);

      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show a button with text 'Login'", () => {
      const buttonText = "Login";

      render(chakraProvider);

      const submitButton = screen.getByRole("button", { name: buttonText });

      expect(submitButton).toBeInTheDocument();
    });
  });
});
