import { screen } from "@testing-library/react";
import { imageMock } from "../../mocks/imageMock";
import { renderRouterWithProviders } from "../../testUtils/testUtils";
import CardDetail from "./CardDetail";

describe("Given a CardDetail component", () => {
  describe("When it renders", () => {
    test("Then it should show an image of the prompt", () => {
      renderRouterWithProviders(<CardDetail image={imageMock} />);

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a heading with the text 'Abstract Chameleon'", () => {
      renderRouterWithProviders(<CardDetail image={imageMock} />);

      const headingText = "Abstract Chameleon";

      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
