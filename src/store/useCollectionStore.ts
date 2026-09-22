import { Movie } from "@/lib/tmdb-types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MovieEntry extends Pick<
  Movie,
  "id" | "title" | "release_date" | "poster_path" | "vote_average"
> {
  addedAt: number;
}

interface WatchedEntry extends MovieEntry {
  rating: number;
}

interface CollectionState {
  favorites: Record<number, MovieEntry>;
  watchLater: Record<number, MovieEntry>;
  watched: Record<number, WatchedEntry>;

  toggleFavorite: (movie: Movie) => void;
  toggleWatchLater: (movie: Movie) => void;
  markAsWatched: (movie: Movie, rating?: number) => void;
  unmarkWatched: (id: number) => void;
  setRating: (id: number, rating: number) => void;

  isFavorite: (id: number) => boolean;
  isWatchLater: (id: number) => boolean;
  isWatched: (id: number) => boolean;
}

function toMovie({
  id,
  title,
  poster_path,
  release_date,
  vote_average,
}: Movie) {
  return {
    id,
    title,
    poster_path,
    release_date,
    vote_average,
  };
}

export const useCollectionStore = create<CollectionState>()(
  persist(
    (set, get) => ({
      favorites: {},
      watchLater: {},
      watched: {},

      toggleFavorite: (movie) =>
        set((state) => {
          const next = { ...state.favorites };
          if (next[movie.id]) delete next[movie.id];
          else next[movie.id] = { ...toMovie(movie), addedAt: Date.now() };
          return { favorites: next };
        }),

      toggleWatchLater: (movie) =>
        set((state) => {
          const next = { ...state.watchLater };
          if (next[movie.id]) delete next[movie.id];
          else next[movie.id] = { ...toMovie(movie), addedAt: Date.now() };
          return { watchLater: next };
        }),

      markAsWatched: (movie, rating = 0) =>
        set((state) => ({
          watched: {
            ...state.watched,
            [movie.id]: { ...toMovie(movie), rating, addedAt: Date.now() },
          },
        })),

      unmarkWatched: (id) =>
        set((state) => {
          const next = { ...state.watched };
          delete next[id];
          return { watched: next };
        }),

      setRating: (id, rating) =>
        set((state) => {
          const entry = state.watched[id];
          if (!entry) return state;
          return { watched: { ...state.watched, [id]: { ...entry, rating } } };
        }),

      isFavorite: (id) => !!get().favorites[id],
      isWatchLater: (id) => !!get().watchLater[id],
      isWatched: (id) => !!get().watched[id],
    }),
    { name: "collection-storage" },
  ),
);
