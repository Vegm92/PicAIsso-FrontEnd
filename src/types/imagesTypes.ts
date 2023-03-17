export interface ImageDataStructure {
  title: string;
  prompt: string;
  image: string;
  category: string;
  description: string;
  promptedBy: string;
  id?: string;
}

export interface ImagesData {
  images: ImagesDataStructure;
}

export type ImagesDataStructure = ImageDataStructure[];

export interface FormData {
  prompt: string;
  mood: string;
  actionDepicted: string;
  category: string[];
}
