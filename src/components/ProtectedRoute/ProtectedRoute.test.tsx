import ProtectedRoute from "./ProtectedRoute";
import { screen } from "@testing-library/react";
import { useAppSelector } from "../../store/hooks";
import { renderRouterWithProviders } from "../../testUtils/testUtils";

jest.mock("../../store/hooks", () => ({
  useAppSelector: jest.fn(),
}));

describe("Given a ProtectedRoute component", () => {
  describe("When it is rendered and there is a valid token", () => {
    test("Then it should show the react element received by props", () => {
      const state = { user: { token: "token123qwe" } };

      (useAppSelector as jest.Mock).mockImplementation((selector) =>
        selector(state)
      );
      const element = <div>HomePage</div>;
      const expectedTest = "HomePage";

      renderRouterWithProviders(<ProtectedRoute element={element} />);

      const expectedElement = screen.getByText(expectedTest);

      expect(expectedElement).toBeInTheDocument();
    });
  });
});
