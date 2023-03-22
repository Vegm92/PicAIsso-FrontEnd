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
        const { data } = await openAi.createImage({
          prompt: prompt,
          n: 1,
          size: "256x256",
          response_format: "b64_json",
        });

        const dataString = atob(data.data[0].b64_json!);
        const dataNumbers = new Array(dataString.length);
        for (let i = 0; i < dataString.length; i++) {
          dataNumbers[i] = dataString.charCodeAt(i);
        }

        const dataArray = new Uint8Array(dataNumbers);
        const dataBlob = new Blob([dataArray], { type: "image/png" });

        const newFile = new File([dataBlob], "image.png", {
          type: "image/png",
        });
        dispatch(unsetIsLoadingActionCreator());
        return newFile;
      } catch (error) {
        addToast(
          "Couldn't create!",
          "There was a problem while trying to create an image",
          "error",
          "bottom"
        );
      }
    },
    [addToast, dispatch]
  );

  return { generateImage };
};

export default useApi;
