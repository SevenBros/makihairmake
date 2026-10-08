import raw from "./photos.json";

export type Photo = { src: string; thumb: string; w: number; h: number };
export type Category = "graphic" | "mh";

export const photos = raw as Record<Category, Photo[]>;
