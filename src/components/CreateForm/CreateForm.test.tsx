import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
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

    test("Then it should show a button with the text 'Submit'", () => {
      const expectedButtonText = "Submit";
      renderWithProviders(<CreateForm />);

      const expectedButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should show an input textbox with for attribute text 'Subject'", () => {
      const text = "subject";

      renderWithProviders(<CreateForm />);

      const expectedInput = screen.getByRole("textbox", { name: text });

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show a list of options with the text 'Select Mood'", () => {
      const text = "Select Mood";

      renderWithProviders(<CreateForm />);

      const expectedSelect = screen.getByRole("option", { name: text });

      expect(expectedSelect).toBeInTheDocument();
    });
  });

  describe("When the user writes 'Chameleon' on the subject field", () => {
    test("Then it should change the value of the subject's field to 'Chameleon'", async () => {
      const subjectLabel = "subject";
      const expectedFieldValue = "Chameleon";
      renderWithProviders(<CreateForm />);

      const submitField = screen.getByLabelText(subjectLabel);

      fireEvent.change(submitField, { target: { value: expectedFieldValue } });

      expect(submitField).toHaveProperty("value", expectedFieldValue);
    });
  });

  describe("When the user writes 'resting' on the actionDepicted field", () => {
    test("Then it should change the value of the actionDepicted field to 'resting'", () => {
      const actionDepictedLabel = "Action";
      const expectedFieldValue = "Chameleon";
      renderWithProviders(<CreateForm />);

      const submitField = screen.getByLabelText(actionDepictedLabel);

      fireEvent.change(submitField, { target: { value: expectedFieldValue } });

      expect(submitField).toHaveProperty("value", expectedFieldValue);
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
