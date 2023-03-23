import { imageMock, imageMockVariation } from "../../../mocks/imageMock";
import {
  deleteImagesActionCreator,
  imagesReducer,
  loadImagesActionCreator,
} from "./imagesSlice";
import { ImagesDataStructure, ImagesFromApi } from "../../../types/imagesTypes";

const images: ImagesDataStructure = [imageMock, imageMockVariation];
const initialImagesState: ImagesFromApi = {
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

describe("Given a image reducer", () => {
  describe("When it receives a new state and the action to load images", () => {
    test("Then it should return a list of 2 images", () => {
      const loadImagesAction = loadImagesActionCreator(images);

      const newImages = imagesReducer(initialImagesState, loadImagesAction);

      const updatedImages = {
        ...initialImagesState,
        images: images,
      };
      expect(updatedImages).toStrictEqual(newImages);
    });
  });

  describe("When it receives a new state and the action to delete images", () => {
    test("Then it should return an image", () => {
      const initialImagesToDelete: ImagesFromApi = {
        ...initialImagesState,
        images: images,
      };
      const payload = "qwert12345";
      const deleteImagesAction = deleteImagesActionCreator(payload);

      const result = imagesReducer(initialImagesToDelete, deleteImagesAction);
      const updatedImages = {
        ...initialImagesState,
        images: [imageMockVariation],
      };

      expect(updatedImages).toStrictEqual(result);
    });
  });
});
