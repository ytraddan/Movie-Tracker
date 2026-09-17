"use client";

import { useCollectionStore } from "@/store/useCollectionStore";
import styles from "./movieActions.module.css";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { ClockIcon as ClockIconOutline } from "@heroicons/react/24/outline";
import { CheckCircleIcon as CheckCircleIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { ClockIcon as ClockIconSolid } from "@heroicons/react/24/solid";
import { CheckCircleIcon as CheckCircleIconSolid } from "@heroicons/react/24/solid";
import { Movie } from "@/lib/tmdb-types";
import { useEffect, useState } from "react";

interface MovieActionsProps {
  movie: Movie;
}

export default function MovieActions({ movie }: MovieActionsProps) {
  const isFavorite = useCollectionStore((s) => s.isFavorite(movie.id));
  const isWatchLater = useCollectionStore((s) => s.isWatchLater(movie.id));
  const isWatched = useCollectionStore((s) => s.isWatched(movie.id));

  const toggleFavorite = useCollectionStore((s) => s.toggleFavorite);
  const toggleWatchLater = useCollectionStore((s) => s.toggleWatchLater);
  const markAsWatched = useCollectionStore((s) => s.markAsWatched);
  const unmarkWatched = useCollectionStore((s) => s.unmarkWatched);

  const [hydrated, setHydrated] = useState(false);

  useEffect(
    () =>
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHydrated(true),
    [],
  );

  if (!hydrated) {
    return (
      <div className={styles.movieActions}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className={styles.button} />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.movieActions}>
      <button
        type="button"
        onClick={() => toggleFavorite(movie)}
        className={`${styles.button} ${styles.favorite}`}
      >
        {isFavorite ? (
          <HeartIconSolid className={`${styles.icon} ${styles.solid}`} />
        ) : (
          <HeartIconOutline className={styles.icon} />
        )}
        <span>Favorite</span>
      </button>

      <button
        type="button"
        onClick={() => toggleWatchLater(movie)}
        className={`${styles.button} ${styles.watchlist}`}
      >
        {isWatchLater ? (
          <ClockIconSolid className={`${styles.icon} ${styles.solid}`} />
        ) : (
          <ClockIconOutline className={styles.icon} />
        )}
        <span>Watch Later</span>
      </button>

      <button
        type="button"
        onClick={() =>
          isWatched ? unmarkWatched(movie.id) : markAsWatched(movie, 4)
        }
        className={`${styles.button} ${styles.watched}`}
      >
        {isWatched ? (
          <CheckCircleIconSolid className={`${styles.icon} ${styles.solid}`} />
        ) : (
          <CheckCircleIconOutline className={styles.icon} />
        )}
        <span>Watched</span>
      </button>
    </div>
  );
}
