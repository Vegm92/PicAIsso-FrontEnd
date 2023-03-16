import { screen } from "@testing-library/react";
import "react-router-dom";
import * as ReactRouterDom from "react-router-dom";
import Login from "./LoginPage";
import LoginPage from "./LoginPage";
import LoginForm from "../../components/LoginForm/LoginForm";
import { preloadedStateLoggedIn } from "../../testUtils/preloadedStates";
import { renderRouterWithProviders } from "../../testUtils/testUtils";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

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

    describe("When the user is already logged in", () => {
      test("Then it should call 'Navigate'", () => {
        renderRouterWithProviders(<LoginPage />, preloadedStateLoggedIn);
        expect(ReactRouterDom.Navigate).toHaveBeenCalled();
      });
    });
  });
});
