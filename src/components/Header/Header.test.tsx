import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/testUtils";
import { UserState } from "../../types/userTypes";

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

      const expectedButton = screen.getByRole("link", {
        name: Linktext,
      });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should show a link to with the text 'Log out' if the user is logged in", () => {
      const user: UserState = { email: "", id: "", isLogged: true, token: "" };

      renderRouterWithProviders(<Header />, { user: user });

      const expectedNavBar = screen.getByRole("navigation");

      expect(expectedNavBar).toBeInTheDocument();
    });
  });
});
