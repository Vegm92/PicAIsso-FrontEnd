import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { imageMock, mockImageCreate, mockImages } from "../../mocks/imageMock";
import { server } from "../../mocks/server";
import Wrapper from "../../mocks/Wrapper";
import { store } from "../../store";
import {
  deleteImagesActionCreator,
  loadImagesActionCreator,
} from "../../store/features/imagesSlice/imagesSlice";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
  openModalActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import useImages from "./useImages";

afterEach(() => {
  jest.resetAllMocks();
});

beforeAll(() => {
  jest.clearAllMocks();
});

const spyDispatch = jest.spyOn(store, "dispatch");
const mockAddToast = jest.fn();

jest.mock("../../modals/CustomToast", () => ({
  CustomToast: () => ({
    addToast: mockAddToast,
  }),
}));

describe("Given a useImages custom hook", () => {
  describe("When it is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { getImages },
        },
      } = renderHook(() => useImages(), { wrapper: Wrapper });

      await getImages();

      expect(spyDispatch).toHaveBeenCalled();
    });
  });

  describe("When the getImages function is called and the response from the request is failed", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should not call the dispatch", async () => {
      const {
        result: {
          current: { getImages },
        },
      } = renderHook(() => useImages(), { wrapper: Wrapper });

      await getImages();

      expect(spyDispatch).not.toHaveBeenNthCalledWith(
        2,
        loadImagesActionCreator(mockImages.images)
      );
    });
  });
});

describe("Given a useImages custom hook and a deleteImages function", () => {
  describe("When te deleteImages function is called", () => {
    test("Then it should call the setIsLoadingActionCreator dispatch", async () => {
      const {
        result: {
          current: { deleteImage },
        },
      } = renderHook(() => useImages(), { wrapper: Wrapper });

      await deleteImage(imageMock.id);

      expect(spyDispatch).toHaveBeenCalledWith(setIsLoadingActionCreator());
    });

    test("Then it should should call the unsetIsLoadingActionCreator dispatch", async () => {
      const {
        result: {
          current: { deleteImage },
        },
      } = renderHook(() => useImages(), { wrapper: Wrapper });

      await deleteImage(imageMock.id);

      expect(spyDispatch).toHaveBeenCalledWith(unsetIsLoadingActionCreator());
    });

    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { deleteImage },
        },
      } = renderHook(() => useImages(), { wrapper: Wrapper });

      await deleteImage(imageMock.id);

      expect(spyDispatch).toHaveBeenCalledWith(
        deleteImagesActionCreator(imageMock.id)
      );
    });
  });

  describe("When the response respond with an error", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should call the openModalActionCreator", async () => {
      const {
        result: {
          current: { deleteImage },
        },
      } = renderHook(() => useImages(), { wrapper: Wrapper });

      await deleteImage(imageMock.id);

      expect(spyDispatch).toHaveBeenCalledWith(
        openModalActionCreator({
          isError: true,
          isSuccess: false,
          message: "Image not deleted, something went wrong",
        })
      );
    });
  });
});

describe("Given a useImages custom hook and the createImage function", () => {
  describe("When the createImage function is called", () => {
    test("Then it should call the openModal action creator", async () => {
      const {
        result: {
          current: { createImage },
        },
      } = renderHook(() => useImages(), { wrapper: Wrapper });

      await createImage(mockImageCreate);

      expect(spyDispatch).toHaveBeenCalled();
    });

    test("Then it should should call the unsetIsLoadingActionCreator dispatch", async () => {
      const {
        result: {
          current: { createImage },
        },
      } = renderHook(() => useImages(), { wrapper: Wrapper });

      await createImage(mockImageCreate);

      expect(spyDispatch).toHaveBeenCalledWith(unsetIsLoadingActionCreator());
    });
  });

  describe("When the response respond with an error", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should call the openModalActionCreator", async () => {
      const addToastCall = [
        "Error while creating an image",
        "Coulnd't create a new image",
        "error",
      ];

      const {
        result: {
          current: { createImage },
        },
      } = renderHook(() => useImages(), { wrapper: Wrapper });

      await createImage(mockImageCreate);

      expect(mockAddToast).toHaveBeenCalledWith(...addToastCall);
    });
  });
});
