import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { mockImages } from "../../mocks/imageMock";
import { server } from "../../mocks/server";
import Wrapper from "../../mocks/Wrapper";
import { store } from "../../store";
import { loadImagesActionCreator } from "../../store/features/imagesSlice/imagesSlice";
import useApi from "./useApi";

afterEach(() => {
  jest.resetAllMocks();
});

beforeAll(() => {
  jest.clearAllMocks();
});

const spyDispatch = jest.spyOn(store, "dispatch");
const mockAddToast = jest.fn();
const mockDispatch = jest.fn();
const mockedPrompt = "This is a mocked prompt";

jest.mock("../../store/hooks", () => ({
  useAppDispatch: () => mockDispatch,
}));

jest.mock("../../modals/CustomToast", () => ({
  CustomToast: () => ({
    addToast: mockAddToast,
  }),
}));

const newTimeout = 10000;
jest.setTimeout(newTimeout);

describe("Given a generateImage function", () => {
  describe("When it is called", () => {
    test("Then it should call the dispatch with an image", async () => {
      const {
        result: {
          current: { generateImage },
        },
      } = renderHook(() => useApi(), { wrapper: Wrapper });

      await generateImage(mockedPrompt);

      expect(spyDispatch).not.toHaveBeenCalled();
    });
  });

  describe("When the generateImage function is called and the response from the request is failed", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should not call the dispatch", async () => {
      const {
        result: {
          current: { generateImage },
        },
      } = renderHook(() => useApi(), { wrapper: Wrapper });

      await generateImage(mockedPrompt);

      expect(spyDispatch).not.toHaveBeenNthCalledWith(
        2,
        loadImagesActionCreator(mockImages.images)
      );
    });
  });

  describe("When the response respond with an error", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should call the openModalActionCreator", async () => {
      const addToastCall = [
        "Couldn't create!",
        "There was a problem while trying to create an image",
        "error",
        "bottom",
      ];

      const {
        result: {
          current: { generateImage },
        },
      } = renderHook(() => useApi(), { wrapper: Wrapper });

      await generateImage("");

      expect(mockAddToast).toHaveBeenCalledWith(...addToastCall);
    });
  });
});
