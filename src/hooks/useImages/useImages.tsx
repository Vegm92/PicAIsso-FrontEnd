import { useCallback } from "react";
import { CustomToast } from "../../modals/CustomToast";
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
import {
  FormCreateStructure,
  ImageDataStructure,
  ImagesData,
} from "../../types/imagesTypes";
import formData from "./formData";

const apiUrl = process.env.REACT_APP_URL_API;
const pathImages = "/images";
const getImagesEndpoint = "/";
const deleteImagesEndpoint = "/delete/";
const createImageEndPoint = "/create/";

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
        addToast("Deleted", "Image deleted succesfully", "success", "top");
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
    [addToast, dispatch, token]
  );

  const createImage = useCallback(
    async (image: FormCreateStructure) => {
      try {
        dispatch(setIsLoadingActionCreator());
        const data = formData(image);

        const response = await fetch(
          `${apiUrl}${pathImages}${createImageEndPoint}`,
          {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: data,
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

  return { getImages, deleteImage, createImage };
};

export default useImages;
