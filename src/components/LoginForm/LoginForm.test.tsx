import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserCredentials } from "../../types/userTypes";
import { renderRouterWithProviders } from "../../testUtils/testUtils";
import LoginForm from "./LoginForm";

const mockedLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockedLoginUser,
}));

describe("Given a LoginForm component", () => {
  describe("When rendered", () => {
    test("Then it should show an input with placeholder 'Email'", () => {
      const inputPlaceholder = "Email";

      renderRouterWithProviders(<LoginForm />);
      const emailInput = screen.getByPlaceholderText(inputPlaceholder);

      expect(emailInput).toBeInTheDocument();
    });

    test("Then it should show an input with placeholder 'Password'", () => {
      const inputPlaceholder = "Password";

      renderRouterWithProviders(<LoginForm />);

      const passwordInput = screen.getByPlaceholderText(inputPlaceholder);

      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show a button with text 'Login'", () => {
      const buttonText = "Login";

      renderRouterWithProviders(<LoginForm />);

      const submitButton = screen.getByRole("button", { name: buttonText });

      expect(submitButton).toBeInTheDocument();
    });
  });

  describe("When the user submits the form", () => {
    test("Then it should call the handleSubmit function", async () => {
      const mockUser: UserCredentials = {
        id: "qwe123",
        email: "victor@gmail.com",
        password: "vic123456",
      };

      renderRouterWithProviders(<LoginForm />);

      const submitButtonContent = "Login";

      const emailInput = screen.getByPlaceholderText("Email");
      const passwordInput = screen.getByPlaceholderText("Password");
      const SubmitButton = screen.getByRole("button", {
        name: submitButtonContent,
      });

      await waitFor(
        async () => await userEvent.type(emailInput, mockUser.email)
      );
      await waitFor(
        async () => await userEvent.type(passwordInput, mockUser.password)
      );
      await waitFor(async () => await userEvent.click(SubmitButton));

      expect(mockedLoginUser).toHaveBeenCalled();
    });
  });
});
