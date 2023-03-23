import userEvent from "@testing-library/user-event";
import { act, screen } from "@testing-library/react";
import { imageMock } from "../../mocks/imageMock";
import { renderWithProviders } from "../../testUtils/testUtils";
import DeleteButton from "./DeleteButton";

const mockDeleteImage = jest.fn();

jest.mock("../../hooks/useImages/useImages", () => () => ({
  deleteImage: mockDeleteImage,
}));

describe("Given a DeleteButton component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with an aria-label 'delete'", () => {
      const text = "delete";

      renderWithProviders(<DeleteButton image={imageMock} />);

      const expectedButton = screen.getByRole("button", { name: text });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should call the function deleteEvent when the user click the button", async () => {
      renderWithProviders(<DeleteButton image={imageMock} />);

      const submitButton = screen.getByRole("button");

      await act(async () => await userEvent.click(submitButton));

      expect(mockDeleteImage).toHaveBeenCalledWith(imageMock.id);
    });
  });
});
