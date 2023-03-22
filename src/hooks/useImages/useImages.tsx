import { useCallback } from "react";
import { CustomToast } from "../../modals/CustomToast";
import {
  deleteImagesActionCreator,
  loadImagesActionCreator,
  loadOneImageActionCreator,
} from "../../store/features/imagesSlice/imagesSlice";
import {
  openModalActionCreator,
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  FormCreateStructure,
  ImagesData,
  ImagesFromApi,
} from "../../types/imagesTypes";

const apiUrl = process.env.REACT_APP_URL_API;
const pathImages = "/images";
const getImagesEndpoint = "/";
const deleteImagesEndpoint = "/delete/";
const createImageEndPoint = "/create/";
const detailImageEndpoint = "/detail";

const useImages = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);
  const { addToast } = CustomToast();

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

  const getImageById = useCallback(
    async (id: string) => {
      try {
        dispatch(setIsLoadingActionCreator());
        const response = await fetch(
          `${apiUrl}${pathImages}${detailImageEndpoint}/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Can't show the image you are looking for");
        }

        const { image } = (await response.json()) as ImagesFromApi;
        dispatch(loadOneImageActionCreator(image));
        dispatch(unsetIsLoadingActionCreator());
      } catch (error) {
        dispatch(
          openModalActionCreator({
            isError: true,
            isSuccess: false,
            message: (error as Error).message,
          })
        );
      }
    },
    [dispatch, token]
  );

  const deleteImage = useCallback(
    async (id: string) => {
      try {
        dispatch(setIsLoadingActionCreator());
        const response = await fetch(
          `${process.env.REACT_APP_URL_API}${pathImages}${deleteImagesEndpoint}${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error while deleting the image");
        }

        dispatch(deleteImagesActionCreator(id));
        dispatch(unsetIsLoadingActionCreator());
        dispatch(
          openModalActionCreator({
            isError: false,
            isSuccess: true,
            message: "Image deleted",
          })
        );
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

  const createImage = useCallback(
    async (image: FormCreateStructure) => {
      try {
        dispatch(setIsLoadingActionCreator());

        const response = await fetch(
          `${apiUrl}${pathImages}${createImageEndPoint}`,
          {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: JSON.stringify(image),
          }
        );
        if (!response.ok) {
          throw new Error("The image couldn't be created");
        }

        dispatch(unsetIsLoadingActionCreator());
        addToast("Image Created!", "The image has been created", "success");
      } catch (error) {
        dispatch(unsetIsLoadingActionCreator());
        addToast(
          "Error while creating an image",
          "Coulnd't create a new image",
          "error"
        );
      }
    },
    [dispatch, token, addToast]
  );

  return { getImages, deleteImage, createImage, getImageById };
};

export default useImages;
