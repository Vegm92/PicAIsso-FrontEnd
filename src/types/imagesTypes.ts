export interface BaseImageStructure {
  title: string;
  userPrompt: string;
  category: string;
  description: string;
}

export interface FormCreateStructure extends BaseImageStructure {
  image: Blob;
}
export interface ImageDataStructure extends BaseImageStructure {
  id: string;
  promptedBy: string;
  image: string;
}

export interface ImagesData {
  images: ImagesDataStructure;
}

export interface ImagesFromApi {
  images: ImagesDataStructure;
  image: ImageDataStructure;
}

export type ImagesDataStructure = ImageDataStructure[];
