export interface FormCreateStructure {
  title: string;
  userPrompt: string;
  category: string;
  description: string;
  image: string;
}
export interface ImageDataStructure extends FormCreateStructure {
  id: string;
  promptedBy: string;
}

export interface ImagesData {
  images: ImagesDataStructure;
}

export type ImagesDataStructure = ImageDataStructure[];
