import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { mockImages } from "../../mocks/imageMock";
import { server } from "../../mocks/server";
import Wrapper from "../../mocks/Wrapper";
import { store } from "../../store";
import { loadImagesActionCreator } from "../../store/features/imagesSlice/imagesSlice";
import useImages from "./useImages";

afterEach(() => {
  jest.resetAllMocks();
});

const spyDispatch = jest.spyOn(store, "dispatch");

describe("Given a useImages custom hook", () => {
  describe("When it is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { getImages },
        },
      } = renderHook(() => useImages(), { wrapper: Wrapper });

      await getImages();

      expect(spyDispatch).toHaveBeenCalledWith(
        loadImagesActionCreator(mockImages.images)
      );
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
