import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "./types";

const uiInitialState: UiState = {
  isLoading: false,
  feedback: {
    message: "",
    isSuccess: true,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    showLoader: (previousState: UiState) => ({
      ...previousState,
      isLoading: true,
    }),

    closeLoader: (previousState: UiState) => ({
      ...previousState,
      isLoading: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  showLoader: showLoaderActionCreator,
  closeLoader: closeLoaderActionCreator,
} = uiSlice.actions;
