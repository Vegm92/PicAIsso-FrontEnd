import { useCallback } from "react";
import { loadImagesActionCreator } from "../../store/features/imagesSlice/imagesSlice";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../store/hooks";
import { ImagesData } from "../../types/imagesTypes";

const apiUrl = process.env.REACT_APP_URL_API;
const pathImages = "/picaisso";
const getImagesEndpoint = "/images";

const useImages = () => {
  const dispatch = useAppDispatch();

  const getImages = useCallback(async () => {
    try {
      dispatch(setIsLoadingActionCreator());

      const response = await fetch(
        `${apiUrl}${pathImages}${getImagesEndpoint}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json; charset=UTF-8" },
        }
      );

      const { images } = (await response.json()) as ImagesData;

      if (!response.ok) {
        return;
      }

      dispatch(unsetIsLoadingActionCreator());
      dispatch(loadImagesActionCreator(images));
    } catch (error) {
      dispatch(unsetIsLoadingActionCreator());
      return (error as Error).message;
    }
  }, [dispatch]);

  return { getImages };
};

export default useImages;
