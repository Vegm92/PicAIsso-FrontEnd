import { renderRouterWithProviders } from "../../testUtils/testUtils";
import CardList from "./CardList";
import { mockImages } from "../../mocks/imageMock";
import { screen } from "@testing-library/react";

describe("Given a CardList component", () => {
  describe("When it renders", () => {
    test("Then it should show a card list with a Card with a header 'Abstract Chameleon'", () => {
      const headerText = "Abstract Chameleon";

      renderRouterWithProviders(<CardList />, { image: mockImages });

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
