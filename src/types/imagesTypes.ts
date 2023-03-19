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

export interface FormCreateStructure {
  subject: string;
  description: string;
  actionDepicted: string;
  mood: string;
  category: string;
}
