import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalPayload, UiState } from "../../../types/uiTypes";

const initialState: UiState = {
  isLoading: false,
  feedback: {
    message: "",
    isSuccess: true,
    isError: false,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    setIsLoading: (currentState): UiState => ({
      ...currentState,
      isLoading: true,
    }),

    unsetIsLoading: (currentState): UiState => ({
      ...currentState,
      isLoading: false,
    }),

    openModal: (
      currentUiState,
      action: PayloadAction<ModalPayload>
    ): UiState => ({
      ...currentUiState,
      feedback: {
        isSuccess: action.payload.isSuccess,
        message: action.payload.message,
        isError: action.payload.isError,
      },
    }),

    closeModal: (currentUiState): UiState => ({
      ...currentUiState,
      feedback: {
        isSuccess: false,
        message: initialState.feedback.message,
        isError: false,
      },
    }),
  },
});

export const {
  setIsLoading: setIsLoadingActionCreator,
  unsetIsLoading: unsetIsLoadingActionCreator,
  closeModal: closeModalActionCreator,
  openModal: openModalActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
