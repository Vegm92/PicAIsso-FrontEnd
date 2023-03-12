import { screen } from "@testing-library/react";
import imageMock from "../../mocks/imageMock";
import { renderWithProviders } from "../../testUtils/testUtils";
import Card from "./Card";

describe("Given a Card component", () => {
  describe("When it renders", () => {
    test("Then it should show an image of the prompt", () => {
      renderWithProviders(<Card image={imageMock} />);

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a heading with the text 'Abstract Chameleon'", () => {
      renderWithProviders(<Card image={imageMock} />);

      const headingText = "Abstract Chameleon";

      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
