import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserCredentials } from "../../store/features/users/usersSlice/types";
import { renderWithProviders } from "../../testUtils";
import LoginForm from "./LoginForm";

const mockedLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockedLoginUser,
}));

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

  describe("When the user submits the form", () => {
    test("Then it should call the handleSubmit function", async () => {
      const mockUser: UserCredentials = {
        email: "victor@gmail.com",
        password: "vic123456",
      };

      renderWithProviders(<LoginForm />);

      const submitButtonContent = "Login";

      const emailInput = screen.getByPlaceholderText("Email");
      const passwordInput = screen.getByPlaceholderText("Password");
      const SubmitButton = screen.getByRole("button", {
        name: submitButtonContent,
      });

      await act(async () => await userEvent.type(emailInput, mockUser.email));
      await act(
        async () => await userEvent.type(passwordInput, mockUser.password)
      );
      await act(async () => await userEvent.click(SubmitButton));

      expect(mockedLoginUser).toHaveBeenCalled();
    });
  });
});
