import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ImageDataStructure,
  ImagesData,
  ImagesDataStructure,
} from "../../../types/imagesTypes";

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

    deleteImage: (
      currentImageState,
      action: PayloadAction<ImageDataStructure>
    ) => {
      const newImages = currentImageState.images.filter(
        (image) => image.id !== action.payload.id
      );

      return { images: newImages };
    },
  },
});

export const {
  loadImages: loadImagesActionCreator,
  deleteImage: deleteImagesActionCreator,
} = imagesSlice.actions;
export const imagesReducer = imagesSlice.reducer;
