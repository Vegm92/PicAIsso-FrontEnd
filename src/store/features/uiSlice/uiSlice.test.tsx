import { ModalPayload, UiState } from "../../../types/uiTypes";
import {
  closeModalActionCreator,
  openModalActionCreator,
  setIsLoadingActionCreator,
  uiReducer,
  unsetIsLoadingActionCreator,
} from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When it receives a new state and an action to setIsLoading", () => {
    test("Then it should return a new state with the property isLoading set as true", () => {
      const initialUiState: UiState = {
        feedback: {
          isError: false,
          isSuccess: true,
          message: "",
        },
        isLoading: false,
      };
      const expectedUiState: UiState = {
        isLoading: true,
        feedback: {
          isError: false,
          isSuccess: true,
          message: "",
        },
      };

      const setIsLoadingAction = setIsLoadingActionCreator();
      const newIsLoadingState = uiReducer(initialUiState, setIsLoadingAction);

      expect(newIsLoadingState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives a new state and the action to unsetIsLoading", () => {
    test("Then it should return a new state with the property isLoading set as false", () => {
      const initialUiState: UiState = {
        isLoading: true,
        feedback: {
          isError: false,
          isSuccess: true,
          message: "",
        },
      };
      const expectedUiState: UiState = {
        isLoading: false,
        feedback: {
          isError: false,
          isSuccess: true,
          message: "",
        },
      };

      const unsetIsLoadingAction = unsetIsLoadingActionCreator();
      const newIsLoadingState = uiReducer(initialUiState, unsetIsLoadingAction);

      expect(newIsLoadingState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it is called with a closefeedback action after showing a feedback for an error with the text 'Wrong credentials'", () => {
    test("Then it should hide the feedback", () => {
      const uiInitialState: UiState = {
        isLoading: false,
        feedback: {
          isError: true,
          message: "Wrong credentials",
          isSuccess: false,
        },
      };

      const expectedNewState: UiState = {
        isLoading: false,
        feedback: { isError: false, message: "", isSuccess: false },
      };

      const closefeedbackAction = closeModalActionCreator();
      const newUiState = uiReducer(uiInitialState, closefeedbackAction);

      expect(newUiState).toStrictEqual(expectedNewState);
    });
  });

  describe("When it is called with an openfeedback action after showing a feedback of succes with the text 'Delete was succesful'", () => {
    test("Then it should hide the feedback", () => {
      const uiInitialState: UiState = {
        isLoading: false,
        feedback: {
          isError: true,
          message: "Delete was susccesful",
          isSuccess: false,
        },
      };

      const feedbackPayload: ModalPayload = {
        isError: false,
        isSuccess: true,
        message: "Delete was succesful",
      };

      const expectedNewState: UiState = {
        isLoading: false,
        feedback: {
          isError: false,
          message: "Delete was succesful",
          isSuccess: true,
        },
      };

      const openfeedbackAction = openModalActionCreator(feedbackPayload);
      const newUiState = uiReducer(uiInitialState, openfeedbackAction);

      expect(newUiState).toStrictEqual(expectedNewState);
    });
  });
});
