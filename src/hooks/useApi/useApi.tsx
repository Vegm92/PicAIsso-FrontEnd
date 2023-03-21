import { Configuration, OpenAIApi } from "openai";
import { useCallback } from "react";
import { CustomToast } from "../../modals/CustomToast";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../store/hooks";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY_OPENAI,
});

const openAi = new OpenAIApi(configuration);

const useApi = () => {
  const dispatch = useAppDispatch();
  const { addToast } = CustomToast();

  const generateImage = useCallback(
    async (prompt: string) => {
      try {
        dispatch(setIsLoadingActionCreator());
        const imageParameters = {
          prompt: prompt,
          n: 1,
        };
        const response = await openAi.createImage(imageParameters);
        const urlData = response.data.data[0].url!;

        dispatch(unsetIsLoadingActionCreator());
        return urlData;
      } catch (error) {
        addToast(
          "Couldn't create!",
          "There was a problem while trying to create an image",
          "error",
          "bottom"
        );
        return (error as Error).message;
      }
    },
    [addToast, dispatch]
  );

  return { generateImage };
};

export default useApi;
