import {
  FormCreateStructure,
  ImageDataStructure,
  ImagesData,
  ImagesDataStructure,
} from "../types/imagesTypes";
import img from "../media/Chameleon_TradingCard.webp";

export const imageMockCard: ImageDataStructure = {
  title: "Abstract Chameleon",
  category: "whatever, AnEver",
  description: "This is an abstract Chameleon",
  prompt: "Draw a colorfull abstract chameleon",
  image: `${img}`,
  id: "qwert12345",
  promptedBy: "whoever",
};

export const imageMock: ImageDataStructure = {
  title: "Abstract Chameleon",
  category: "whatever, AnEver",
  description: "This is an abstract Chameleon",
  prompt: "Draw a colorfull abstract chameleon",
  image: "mockimage.png",
  id: "qwert1234",
  promptedBy: "whoever",
};
export const imageMockVariation: ImageDataStructure = {
  title: "Abstract mock",
  category: "whatever, AnEver",
  description: "This is an abstract Chameleon",
  prompt: "Draw a colorfull abstract chameleon",
  image: "mockimage.png",
  id: "qwert123",
  promptedBy: "whoever",
};
export const mockImages: ImagesData = {
  images: [imageMock, imageMockVariation],
};

export const mockListImages: ImagesDataStructure = [
  imageMock,
  imageMockVariation,
];

export const mockImageCreate: FormCreateStructure = {
  subject: "Chameleon",
  mood: "Cheerful",
  actionDepicted: "resting",
  description: "This is an abstract Chameleon",
  category: "image-category0",
};
