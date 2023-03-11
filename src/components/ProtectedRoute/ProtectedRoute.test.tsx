import ProtectedRoute from "./ProtectedRoute";
import { screen } from "@testing-library/react";
import { useAppSelector } from "../../store/hooks";
import { renderWithProviders } from "../../testUtils/testUtils";

jest.mock("../../store/hooks", () => ({
  useAppSelector: jest.fn(),
}));

describe("Given a ProtectedRoute component", () => {
  describe("When it is rendered and there is a token", () => {
    test("Then it should show the react element received by props", () => {
      (useAppSelector as jest.Mock).mockReturnValueOnce({
        token: "qwerty123456",
      });
      const element = <div>Protected route</div>;

      renderWithProviders(<ProtectedRoute element={element} />);

      const expectedElement = screen.getByText("Protected route");

      expect(expectedElement).toBeInTheDocument();
    });
  });
});
