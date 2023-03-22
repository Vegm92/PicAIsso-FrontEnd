import { FormCreateStructure } from "../../types/imagesTypes";

const formData = (image: FormCreateStructure) => {
  const data = new FormData();
  data.append("title", image.title);
  data.append("category", image.category);
  data.append("description", image.description);
  data.append("userPrompt", image.userPrompt);
  data.append("image", image.image);

  return data;
};

export default formData;
