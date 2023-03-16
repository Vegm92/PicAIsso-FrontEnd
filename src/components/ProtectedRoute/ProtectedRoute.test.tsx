import { screen } from "@testing-library/react";
import { useAppSelector } from "../../store/hooks";
import ProtectedRoute from "./ProtectedRoute";
import { renderRouterWithProviders } from "../../testUtils/testUtils";

jest.mock("../../store/hooks", () => ({
  useAppSelector: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

describe("Given a ProtectedRoute component", () => {
  const component = <div>HomePage</div>;

  describe("When it is rendered and there is a valid token", () => {
    test("Then it should show the react element received by props", () => {
      const state = { user: { token: "token123qwe" } };

      (useAppSelector as jest.Mock).mockImplementation((selector) =>
        selector(state)
      );
      const expectedTest = "HomePage";

      renderRouterWithProviders(<ProtectedRoute element={component} />);

      const expectedElement = screen.getByText(expectedTest);

      expect(expectedElement).toBeInTheDocument();
    });
  });
});
