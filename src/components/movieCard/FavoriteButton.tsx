"use client";

import { useCollectionStore } from "@/store/useCollectionStore";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import useHydrated from "@/hooks/useHydrated";
import { Movie } from "@/lib/tmdb-types";
import styles from "./favoriteButton.module.css";

interface FavoriteButtonProps {
  movie: Movie;
}

export default function FavoriteButton({ movie }: FavoriteButtonProps) {
  const isFavorite = useCollectionStore((s) => s.isFavorite(movie.id));
  const toggleFavorite = useCollectionStore((s) => s.toggleFavorite);
  const isHydrated = useHydrated();

  if (!isHydrated) {
    return (
      <button type="button" className={styles.button} disabled>
        <HeartIconOutline className={styles.icon} aria-hidden="true" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        toggleFavorite(movie);
      }}
      className={styles.button}
      aria-pressed={isFavorite}
      aria-label={`Favorite: ${movie.title}`}
    >
      {isFavorite ? (
        <HeartIconSolid className={styles.icon} aria-hidden="true" />
      ) : (
        <HeartIconOutline className={styles.icon} aria-hidden="true" />
      )}
    </button>
  );
}
