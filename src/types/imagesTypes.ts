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

export interface ImagesFromApi {
  images: ImagesDataStructure;
  image: ImageDataStructure;
}

export type ImagesDataStructure = ImageDataStructure[];
