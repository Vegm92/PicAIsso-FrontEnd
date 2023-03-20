import { FormCreateStructure } from "../../types/imagesTypes";

const formData = (image: FormCreateStructure) => {
  const data = new FormData();
  data.append("subject", image.subject);
  data.append("actionDepicted", image.actionDepicted);
  data.append("category", image.category);
  data.append("mood", image.mood);
  data.append("description", image.description);

  return data;
};

export default formData;
