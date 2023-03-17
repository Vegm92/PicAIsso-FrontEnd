import { useCallback } from "react";
import {
  deleteImagesActionCreator,
  loadImagesActionCreator,
} from "../../store/features/imagesSlice/imagesSlice";
import {
  openModalActionCreator,
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ImageDataStructure, ImagesData } from "../../types/imagesTypes";

const apiUrl = process.env.REACT_APP_URL_API;
const pathImages = "/images";
const getImagesEndpoint = "/";
const deleteImagesEndpoint = "/delete/";

const useImages = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);

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

      dispatch(unsetIsLoadingActionCreator());
      dispatch(loadImagesActionCreator(images));
    } catch (error) {
      dispatch(unsetIsLoadingActionCreator());
      return (error as Error).message;
    }
  }, [dispatch]);

  const deleteImage = useCallback(
    async (image: ImageDataStructure) => {
      try {
        dispatch(setIsLoadingActionCreator());
        const response = await fetch(
          `${process.env.REACT_APP_URL_API}${pathImages}${deleteImagesEndpoint}${image.id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error while deleting the image");
        }

        dispatch(unsetIsLoadingActionCreator());
        dispatch(deleteImagesActionCreator(image));
      } catch (error) {
        dispatch(unsetIsLoadingActionCreator());
        dispatch(
          openModalActionCreator({
            isError: true,
            isSuccess: false,
            message: "Image not deleted, something went wrong",
          })
        );
      }
    },
    [dispatch, token]
  );

  return { getImages, deleteImage };
};

export default useImages;
