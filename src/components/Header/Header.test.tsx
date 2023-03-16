import { screen } from "@testing-library/react";
import { preloadedStateLoggedIn } from "../../testUtils/preloadedStates";
import { renderRouterWithProviders } from "../../testUtils/testUtils";

import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a navbar", () => {
      renderRouterWithProviders(<Header />);

      const expectedHeader = screen.getByRole("navigation");

      expect(expectedHeader).toBeInTheDocument();
    });

    test("Then it should show a link with the text 'Log in' if the user is not logged in", () => {
      const Linktext = "Log in";

      renderRouterWithProviders(<Header />);

      const expectedLink = screen.getByRole("link", {
        name: Linktext,
      });

      expect(expectedLink).toBeInTheDocument();
    });

    test("Then it should show a link to with the text 'Log out' if the user is logged in", () => {
      renderRouterWithProviders(<Header />);

      const expectedNavBar = screen.getByRole("navigation");

      expect(expectedNavBar).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Log out'", () => {
      const buttonText = "Log out";

      renderRouterWithProviders(<Header />, {
        user: { email: "", id: "", token: "", isLogged: true },
      });

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
