import { renderHook } from "@testing-library/react";
import { errorHandlers, getById, getByIDError } from "../../mocks/handlers";
import { mockImageCreate } from "../../mocks/imageMock";
import { server } from "../../mocks/server";
import Wrapper from "../../mocks/Wrapper";
import { store } from "../../store";
import {
  deleteImagesActionCreator,
  loadImagesActionCreator,
} from "../../store/features/imagesSlice/imagesSlice";
import { unsetIsLoadingActionCreator } from "../../store/features/uiSlice/uiSlice";
import useImages from "./useImages";
import {
  FormCreateStructure,
  ImagesDataStructure,
} from "../../types/imagesTypes";
import FormDataPolyfill from "form-data";

afterEach(() => {
  jest.resetAllMocks();
});

beforeAll(() => {
  jest.clearAllMocks();
});

const spyDispatch = jest.spyOn(store, "dispatch");
const mockAddToast = jest.fn();
const mockedUseNavigate = jest.fn();
const id = "qwert12345";

jest.mock("../../modals/CustomToast", () => ({
  CustomToast: () => ({
    addToast: mockAddToast,
  }),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Given a getImages function", () => {
  describe("When it is called", () => {
    test("Then it should call the dispatch with a list of images", async () => {
      const {
        result: {
          current: { getImages },
        },
      } = renderHook(() => useImages(), { wrapper: Wrapper });

      const images: ImagesDataStructure = [];
      const actionCall = loadImagesActionCreator(images);
      await getImages();

      expect(spyDispatch).toBeCalledWith(actionCall);
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

      expect(spyDispatch).toBeCalledTimes(2);
    });
  });
});

describe("Given a getImagesById function", () => {
  beforeEach(() => {
    server.resetHandlers(...getById);
  });
  describe("When it is called", () => {
    test("Then it should call the dispatch method with an image", async () => {
      const {
        result: {
          current: { getImageById },
        },
      } = renderHook(() => useImages(), { wrapper: Wrapper });
      await getImageById(id);

      expect(spyDispatch).toBeCalledTimes(3);
    });
  });

  describe("When it is called and throw an error", () => {
    beforeEach(() => {
      server.resetHandlers(...getByIDError);
    });
    test("Then it should not call the dispatch", async () => {
      const {
        result: {
          current: { getImageById },
        },
      } = renderHook(() => useImages(), { wrapper: Wrapper });

      await getImageById(id);

      expect(spyDispatch).toBeCalledTimes(2);
    });
  });
});

describe("Given a deleteImages function", () => {
  describe("When it is called", () => {
    test("Then it should call the setIsLoadingActionCreator dispatch with an id", async () => {
      const {
        result: {
          current: { deleteImage },
        },
      } = renderHook(() => useImages(), { wrapper: Wrapper });

      const actionCall = deleteImagesActionCreator(id);
      await deleteImage(id);

      expect(spyDispatch).toBeCalledWith(actionCall);
    });

    test("Then it should should call the unsetIsLoadingActionCreator dispatch", async () => {
      const {
        result: {
          current: { deleteImage },
        },
      } = renderHook(() => useImages(), { wrapper: Wrapper });

      const actionCall = unsetIsLoadingActionCreator();
      await deleteImage(id);

      expect(spyDispatch).toBeCalledWith(actionCall);
    });
  });
  describe("When it is called with an invalid id", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should't call the dispatch", async () => {
      const {
        result: {
          current: { deleteImage },
        },
      } = renderHook(() => useImages(), { wrapper: Wrapper });

      await deleteImage(id);

      expect(spyDispatch).not.toBeCalledWith();
    });
  });
});

describe("Given the createImage function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch two times", async () => {
      const {
        result: {
          current: { createImage },
        },
      } = renderHook(() => useImages(), { wrapper: Wrapper });

      const newImage = new FormDataPolyfill({ readable: true });

      await createImage(newImage as unknown as FormCreateStructure);

      expect(spyDispatch).toBeCalledTimes(2);
    });

    test("Then it should should call the unsetIsLoadingActionCreator dispatch", async () => {
      const {
        result: {
          current: { createImage },
        },
      } = renderHook(() => useImages(), { wrapper: Wrapper });

      const actionCall = unsetIsLoadingActionCreator();
      await createImage(mockImageCreate);

      expect(spyDispatch).toBeCalledWith(actionCall);
    });
  });

  describe("When it is called with invalid data", () => {
    test("Then it should dispatch three times", async () => {
      const {
        result: {
          current: { createImage },
        },
      } = renderHook(() => useImages(), { wrapper: Wrapper });

      await createImage(mockImageCreate);

      expect(spyDispatch).toBeCalledTimes(2);
    });
  });
});
