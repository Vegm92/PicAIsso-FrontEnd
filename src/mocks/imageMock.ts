import {
  FormCreateStructure,
  ImageDataStructure,
  ImagesDataStructure,
  ImagesFromApi,
} from "../types/imagesTypes";

export const imageMock: ImageDataStructure = {
  title: "Abstract Chameleon",
  category: "whatever, AnEver",
  description: "This is an abstract Chameleon",
  userPrompt: "Draw a colorfull abstract chameleon",
  image: "mockimage.png",
  id: "qwert12345",
  promptedBy: "whoever",
};
export const imageMockVariation: ImageDataStructure = {
  title: "Abstract mock",
  category: "whatever, AnEver",
  description: "This is an abstract Chameleon",
  userPrompt: "Draw a colorfull abstract chameleon",
  image: "",
  id: "qwert12345",
  promptedBy: "whoever",
};
export const mockImages: ImagesFromApi = {
  images: [imageMock, imageMockVariation],
  image: {
    id: "",
    title: "",
    description: "",
    category: "",
    userPrompt: "",
    image: "",
    promptedBy: "",
  },
};

export const mockListImages: ImagesDataStructure = [
  imageMock,
  imageMockVariation,
];

export const mockImageCreate: FormCreateStructure = {
  title: "",
  image: new Blob(),
  userPrompt: "",
  description: "This is an abstract Chameleon",
  category: "image-category0",
};
