import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockImageCreate } from "../../mocks/imageMock";
import {
  renderRouterWithProviders,
  renderWithProviders,
} from "../../testUtils/testUtils";
import CreateForm from "./CreateForm";

const mockCreateImageFunction = jest.fn();

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
      const text = "Subject";

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
      const subjectLabel = "Subject";
      const expectedFieldValue = "Chameleon";
      renderWithProviders(<CreateForm />);

      const submitField = screen.getByLabelText(subjectLabel);

      await waitFor(
        async () => await userEvent.type(submitField, expectedFieldValue)
      );
      expect(subjectLabel).toHaveValue(expectedFieldValue);
    });
  });

  describe("When the user writes 'resting' on the actionDepicted field", () => {
    test("Then it should change the value of the actionDepicted field to 'resting'", () => {
      const actionDepictedLabel = "Action";
      const expectedFieldValue = "Chameleon";
      renderRouterWithProviders(<CreateForm />);

      // const submitField = screen.getByLabelText(actionDepictedLabel);
    });
  });
  describe("When the user writes 'This is an abstract Chameleon' on the description field", () => {
    test("Then it should change the value of the description field to 'This is an abstract Chameleon'", () => {
      const subjectLabel = "Subject";
      const expectedFieldValue = "Chameleon";
      renderRouterWithProviders(<CreateForm />);

      // const submitField = screen.getByLabelText(subjectLabel);
    });
  });
  describe("When the user selects 'Cheerful' on the mood field", () => {
    test("Then it should change the value of the mood's field to 'Cheerful'", () => {});
  });
  describe("When the user selects 'image-category0' on the category field", () => {
    test("Then it should change the value of the category's field to 'image-category0'", () => {});
  });
});
