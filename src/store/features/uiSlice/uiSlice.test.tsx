import { UiState } from "../../../types/uiTypes";
import { uiReducer } from "./uiSlice";

const defaultUiPayload: UiState = {
  isLoading: false,
  feedback: {
    message: "",
    isSuccess: true,
  },
};

describe("Given a showLoader reducer", () => {
  describe("When it receives a previus stat with isLoading on false", () => {
    test("Then it should return the same state and isLoading on true", () => {
      const uiPayload = {
        type: "ui/setIsLoading",
      };

      const expectedUiState: UiState = {
        isLoading: true,
        feedback: {
          isSuccess: true,
          message: "",
        },
      };

      const newUi = uiReducer(defaultUiPayload, uiPayload);

      expect(newUi).toStrictEqual(expectedUiState);
    });
  });
});

describe("Given a closeLoader reducer", () => {
  describe("When it receives a previous state with isLoading on true", () => {
    test("Then it should return the state with isLoading on false", () => {
      const uiPayload = {
        type: "ui/unsetIsLoading",
      };

      const expectedUiState: UiState = {
        isLoading: false,
        feedback: {
          isSuccess: true,
          message: "",
        },
      };

      const newUi = uiReducer(defaultUiPayload, uiPayload);

      expect(newUi).toStrictEqual(expectedUiState);
    });
  });
});
