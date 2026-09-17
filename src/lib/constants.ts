import {
  CheckCircleIcon,
  ClockIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { ComponentType, SVGProps } from "react";

export const TMDB_AUTH_TOKEN = process.env.TMDB_API_READ_ACCESS_TOKEN;
export const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
export const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export type HomeTab = "popular" | "top_rated" | "upcoming";
export type CollectionTab = "favorites" | "watchLater" | "watched";

interface HomeTabConfig {
  id: HomeTab;
  label: string;
}

interface CollectionTabConfig {
  id: CollectionTab;
  label: string;
  emptyMessage: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const HOME_TABS: HomeTabConfig[] = [
  { id: "popular", label: "Popular" },
  { id: "top_rated", label: "Top Rated" },
  { id: "upcoming", label: "Upcoming" },
];

export const COLLECTION_TABS: CollectionTabConfig[] = [
  {
    id: "favorites",
    label: "Favorites",
    emptyMessage: "Your favorites list is empty",
    icon: HeartIcon,
  },
  {
    id: "watchLater",
    label: "Watch later",
    emptyMessage: "You haven't saved anything yet",
    icon: ClockIcon,
  },
  {
    id: "watched",
    label: "Watched",
    emptyMessage: "You haven't marked any movies as watched yet",
    icon: CheckCircleIcon,
  },
];

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
