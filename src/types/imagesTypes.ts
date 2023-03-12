export interface ImageDataStructure {
  title: string;
  prompt: string;
  image: string;
  category: string[];
  description: string;
}

export type GalleryDataStructure = ImageDataStructure[];
