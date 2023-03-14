export interface ImageDataStructure {
  title: string;
  prompt: string;
  image: string;
  category: string[];
  description: string;
  id: string;
}

export interface ImagesData {
  images: ImagesDataStructure;
}

export type ImagesDataStructure = ImageDataStructure[];
