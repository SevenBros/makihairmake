import raw from "./photos.json";

export type Photo = { src: string; thumb: string; w: number; h: number };
export type Category = "graphic" | "product" | "mh";

export const photos = raw as Record<Category, Photo[]>;
