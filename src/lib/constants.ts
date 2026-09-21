import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";

export const TMDB_AUTH_TOKEN = process.env.TMDB_API_READ_ACCESS_TOKEN;
export const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
export const TMDB_BASE_URL = "https://api.themoviedb.org/3";
export const TMDB_MAX_PAGE = 500;

export const HOME_TABS = [
  {
    id: "popular",
    label: "Popular",
    emptyMessage: "No results found",
  },
  {
    id: "top_rated",
    label: "Top Rated",
    emptyMessage: "No results found",
  },
  { id: "upcoming", label: "Upcoming", emptyMessage: "No results found" },
] as const;

export const COLLECTION_TABS = [
  {
    id: "favorites",
    label: "Favorites",
    emptyMessage: "You haven't added anything to your favorites yet",
    icon: HeartIcon,
  },
  {
    id: "watchLater",
    label: "Watch later",
    emptyMessage: "You haven't saved anything as watch later yet",
    icon: ClockIcon,
  },
  {
    id: "watched",
    label: "Watched",
    emptyMessage: "You haven't marked any movies as watched yet",
    icon: CheckCircleIcon,
  },
] as const;

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
  profile: {
    sm: "w45",
    md: "w185",
    original: "original",
  },
} as const;
