export const TMDB_AUTH_TOKEN =
  process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN;
export const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
export const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export const IMAGE_SIZES = {
  poster: {
    sm: "w185",
    md: "w342",
    lg: "w500",
    original: "original",
  },
  backdrop: {
    sm: "w780",
    lg: "w1280",
    original: "original",
  },
} as const;
