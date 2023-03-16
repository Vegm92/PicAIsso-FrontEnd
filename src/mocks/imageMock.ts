import { ImageDataStructure, ImagesData } from "../types/imagesTypes";
import img from "../media/Chameleon_TradingCard.webp";

export const imageMockCard: ImageDataStructure = {
  title: "Abstract Chameleon",
  category: "whatever, AnEver",
  description: "This is an abstract Chameleon",
  prompt: "Draw a colorfull abstract chameleon",
  image: `${img}`,
  id: "qwert12345",
};

export const imageMock: ImageDataStructure = {
  title: "Abstract Chameleon",
  category: "whatever, AnEver",
  description: "This is an abstract Chameleon",
  prompt: "Draw a colorfull abstract chameleon",
  image: "mockimage.png",
  id: "qwert12345",
};
export const imageMockVariation: ImageDataStructure = {
  title: "Abstract mock",
  category: "whatever, AnEver",
  description: "This is an abstract Chameleon",
  prompt: "Draw a colorfull abstract chameleon",
  image: "mockimage.png",
  id: "qwert12345",
};
export const mockImages: ImagesData = {
  images: [imageMock, imageMockVariation],
};
