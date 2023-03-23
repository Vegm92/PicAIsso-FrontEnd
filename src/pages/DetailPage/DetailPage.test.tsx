import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/testUtils";
import DetailPage from "./DetailPage";

describe("Given the DetailPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title 'Detail''", () => {
      const expectedTitle = "Detail";

      renderRouterWithProviders(<DetailPage />, {});
      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
