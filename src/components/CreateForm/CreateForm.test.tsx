import { act, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  renderRouterWithProviders,
  renderWithProviders,
} from "../../testUtils/testUtils";
import CreateForm from "./CreateForm";

const mockCreateImageFunction = jest.fn();

jest.mock("../../hooks/useImages/useImages", () => () => ({
  createImage: mockCreateImageFunction,
}));

describe("Given a CreateForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Create an image from text prompt'", () => {
      const headerText = "Create an image from text prompt";

      renderWithProviders(<CreateForm />);

      const expectedHeaderTitle = screen.getByRole("heading", {
        name: headerText,
      });

      expect(expectedHeaderTitle).toBeInTheDocument();
    });

    test("Then it should show a list of options with the text 'Select Mood'", () => {
      const text = "Select Mood";

      renderWithProviders(<CreateForm />);

      const expectedSelect = screen.getByRole("option", { name: text });

      expect(expectedSelect).toBeInTheDocument();
    });
  });

  describe("When the user writes 'This is an abstract Chameleon' on the description field", () => {
    test("Then it should change the value of the description field to 'This is an abstract Chameleon'", () => {
      const descriptionLabel = "Description";
      const expectedFieldValue = "This is an abstract Chameleon";
      renderWithProviders(<CreateForm />);

      const submitField = screen.getByLabelText(descriptionLabel);

      fireEvent.change(submitField, { target: { value: expectedFieldValue } });

      expect(submitField).toHaveProperty("value", expectedFieldValue);
    });
  });

  describe("When the user writes 'Chameleon' on the title field", () => {
    test("Then it should change the value of the title field too 'Chameleon'", async () => {
      renderRouterWithProviders(<CreateForm />, {});

      const titleInput = screen.getByLabelText("title");

      await act(async () => await userEvent.type(titleInput, "Chameleon"));
      expect(titleInput).toHaveValue("Chameleon");
    });
  });

  describe("When the user writes 'A Chameleon' on the prompt field", () => {
    test("Then it should change the value of the prompt field to 'A Chameleon'", () => {
      const promptLabel = "prompt";
      const expectedFieldValue = "A Chameleon";
      renderWithProviders(<CreateForm />);

      const submitField = screen.getByLabelText(promptLabel);

      fireEvent.change(submitField, {
        target: { value: expectedFieldValue },
      });

      expect(submitField).toHaveProperty("value", expectedFieldValue);
    });
  });
  describe("When the user selects 'Cheerful' on the mood field", () => {
    test("Then it should change the value of the mood's field to 'Cheerful'", () => {
      const moodLabel = "Mood";
      const expectedFieldValue = "Cheerful";

      renderWithProviders(<CreateForm />);

      const submitField = screen.getByLabelText(moodLabel);
      fireEvent.change(submitField, { target: { value: expectedFieldValue } });

      expect(submitField).toHaveProperty("value", expectedFieldValue);
    });
  });
});
