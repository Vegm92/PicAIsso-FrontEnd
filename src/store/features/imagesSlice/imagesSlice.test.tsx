import {
  imageMock,
  imageMockVariation,
  mockImages,
} from "../../../mocks/imageMock";
import {
  deleteImagesActionCreator,
  imagesReducer,
  loadImagesActionCreator,
} from "./imagesSlice";
import { ImagesData, ImagesDataStructure } from "../../../types/imagesTypes";

const images: ImagesDataStructure = [imageMock, imageMockVariation];
const initialImagesState: ImagesData = {
  images: [],
};

describe("Given a users reducer", () => {
  describe("When it receives a new state and the action to load events", () => {
    test("Then it should return a list of 2 events", () => {
      const loadImagesAction = loadImagesActionCreator(images);
      const expectecImagesToRender: ImagesData = {
        images: images,
      };

      const newImages = imagesReducer(initialImagesState, loadImagesAction);

      expect(newImages).toStrictEqual(expectecImagesToRender);
    });
  });

  describe("When it receives a new state and the action to delete events", () => {
    test("Then it should return an event", () => {
      const deleteImageAction = deleteImagesActionCreator(imageMockVariation);
      const expectedNewArray: ImagesData = { images: [imageMock] };

      const deletedEvent = imagesReducer(mockImages, deleteImageAction);

      expect(deletedEvent).toStrictEqual(expectedNewArray);
    });
  });
});
