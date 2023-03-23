import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ImageDataStructure,
  ImagesDataStructure,
  ImagesFromApi,
} from "../../../types/imagesTypes";

const initialState: ImagesFromApi = {
  images: [],
  image: {
    id: "",
    title: "",
    description: "",
    category: "",
    userPrompt: "",
    image: "",
    promptedBy: "",
  },
};

const imagesSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    loadImages: (
      currentImageState,
      action: PayloadAction<ImagesDataStructure>
    ): ImagesFromApi => ({
      ...currentImageState,
      images: action.payload,
    }),

    loadImageById: (
      currentImageState,
      action: PayloadAction<ImageDataStructure>
    ): ImagesFromApi => ({ ...currentImageState, image: action.payload }),

    deleteImage: (currentImageState, action: PayloadAction<string>) => ({
      ...currentImageState,
      images: currentImageState.images.filter(
        (image) => image.id !== action.payload
      ),
    }),
  },
});

export const {
  loadImages: loadImagesActionCreator,
  loadImageById: loadOneImageActionCreator,
  deleteImage: deleteImagesActionCreator,
} = imagesSlice.actions;
export const imagesReducer = imagesSlice.reducer;
