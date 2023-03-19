import { FormCreateStructure } from "../../types/imagesTypes";

const formData = (event: FormCreateStructure) => {
  const data = new FormData();
  data.append("subject", event.subject);
  data.append("actionDepicted", event.actionDepicted);
  data.append("category", event.category);
  data.append("mood", event.mood);
  data.append("description", event.description);

  return data;
};

export default formData;
