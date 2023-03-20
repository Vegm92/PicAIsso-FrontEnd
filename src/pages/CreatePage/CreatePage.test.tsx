import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/testUtils";
import CreatePage from "./CreatePage";

describe("Given a CreatePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Text To Image - AI Image Generator API'", () => {
      const headerText = "Text To Image - AI Image Generator API";

      renderRouterWithProviders(<CreatePage />, {});

      const expectedHeaderTitle = screen.getByRole("heading", {
        name: headerText,
      });

      expect(expectedHeaderTitle).toBeInTheDocument();
    });

    test("Then it should show a a form to create with a heading saying 'Create an image from text prompt'", () => {
      const headerText = "Create an image from text prompt";

      renderRouterWithProviders(<CreatePage />, {});

      const expectedHeaderTitle = screen.getByRole("heading", {
        name: headerText,
      });

      expect(expectedHeaderTitle).toBeInTheDocument();
    });
  });
});
