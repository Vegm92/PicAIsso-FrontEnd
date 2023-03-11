import { renderRouterWithProviders } from "../../testUtils/testUtils";
import { screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given a Home page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with content introducing what the app does", () => {
      const headingContent =
        "Experience the beauty of AI-generated art that transcends human creativity";

      renderRouterWithProviders(<HomePage />);

      const expectedButton = screen.getByRole("heading", {
        name: headingContent,
      });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should show a text about discovering a new form of expression", () => {
      const textContent =
        "Discover a new form of expression that pushes the boundaries of imagination";

      renderRouterWithProviders(<HomePage />);

      const expectedHeading = screen.getByText(textContent);

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
