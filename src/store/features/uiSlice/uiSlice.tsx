import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "../../../types/uiTypes";

const initialState: UiState = {
  isLoading: false,
  feedback: {
    message: "",
    isSuccess: true,
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
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  setIsLoading: setIsLoadingActionCreator,
  unsetIsLoading: unsetIsLoadingActionCreator,
} = uiSlice.actions;
