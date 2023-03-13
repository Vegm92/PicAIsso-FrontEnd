import { renderRouterWithProviders } from "../../testUtils/testUtils";
import { screen } from "@testing-library/react";
import Login from "./Login";
import LoginForm from "../../components/LoginForm/LoginForm";

describe("Given a Login page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a container with the form inside", () => {
      renderRouterWithProviders(<LoginForm />);

      const expectedContainerForm = screen.getByRole("group");

      expect(expectedContainerForm).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Login'", () => {
      const buttonContent = "Login";

      renderRouterWithProviders(<Login />);

      const expectedButton = screen.getByRole("button", {
        name: buttonContent,
      });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should show a paragraph with the text 'Login to PicAIsso", () => {
      const paragraphText = "Login to PicAIsso";
      renderRouterWithProviders(<LoginForm />);

      const expectedContainerForm = screen.getByText(paragraphText);

      expect(expectedContainerForm).toBeInTheDocument();
    });
  });
});
