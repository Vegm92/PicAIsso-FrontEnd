export interface FormCreateStructure {
  title: string;
  subject: string;
  actionDepicted: string;
  mood: string;
  category: string;
  description: string;
  image: string;
}
export interface ImageDataStructure extends FormCreateStructure {
  prompt: string;
  id: string;
  promptedBy: string;
}

export interface ImagesData {
  images: ImagesDataStructure;
}

export type ImagesDataStructure = ImageDataStructure[];
