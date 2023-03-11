import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a navigatio bar", () => {
      renderWithProviders(<Layout />);

      const navigationBar = screen.getByRole("navigation");

      expect(navigationBar).toBeInTheDocument();
    });
  });
});
