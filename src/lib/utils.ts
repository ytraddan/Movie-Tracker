import { TMDB_IMAGE_BASE_URL } from "./constants";

export function getImageUrl(path: string, size: string) {
  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
}
