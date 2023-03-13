import { ImageDataStructure } from "../types/imagesTypes";
import img from "../media/Chameleon_TradingCard.webp";

const imageMock: ImageDataStructure = {
  title: "Abstract Chameleon",
  category: ["whatever", "AnEver"],
  description: "This is an abstract Chameleon",
  prompt: "Draw a colorfull abstract chameleon",
  image: `${img}`,
  id: "qwert12345",
};

export default imageMock;
