import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ImagesData, ImagesDataStructure } from "../../../types/imagesTypes";

const initialState: ImagesData = {
  images: [],
};

const imagesSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    loadImages: (
      currentImageState,
      action: PayloadAction<ImagesDataStructure>
    ) => ({
      ...currentImageState,
      images: action.payload,
    }),
  },
});

export const { loadImages: loadImagesActionCreator } = imagesSlice.actions;
export const imagesReducer = imagesSlice.reducer;
