"use client";

import { useCollectionStore } from "@/store/useCollectionStore";
import styles from "./movieActions.module.css";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { ClockIcon as ClockIconOutline } from "@heroicons/react/24/outline";
import { CheckCircleIcon as CheckCircleIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { ClockIcon as ClockIconSolid } from "@heroicons/react/24/solid";
import { CheckCircleIcon as CheckCircleIconSolid } from "@heroicons/react/24/solid";
import { Movie } from "@/lib/tmdb-types";
import useHydrated from "@/hooks/useHydrated";

interface MovieActionsProps {
  movie: Movie;
}

export default function MovieActions({ movie }: MovieActionsProps) {
  const isHydrated = useHydrated();

  const isFavorite = useCollectionStore((s) => s.isFavorite(movie.id));
  const isWatchLater = useCollectionStore((s) => s.isWatchLater(movie.id));
  const isWatched = useCollectionStore((s) => s.isWatched(movie.id));

  const toggleFavorite = useCollectionStore((s) => s.toggleFavorite);
  const toggleWatchLater = useCollectionStore((s) => s.toggleWatchLater);
  const markAsWatched = useCollectionStore((s) => s.markAsWatched);
  const unmarkWatched = useCollectionStore((s) => s.unmarkWatched);

  const userRating = useCollectionStore((s) => s.watched[movie.id]?.rating);
  const setRating = useCollectionStore((s) => s.setRating);

  if (!isHydrated) {
    return (
      <div className={styles.buttons}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className={styles.button} />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.movieActions}>
      <div className={styles.buttons}>
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
            isWatched ? unmarkWatched(movie.id) : markAsWatched(movie)
          }
          className={`${styles.button} ${styles.watched}`}
        >
          {isWatched ? (
            <CheckCircleIconSolid
              className={`${styles.icon} ${styles.solid}`}
            />
          ) : (
            <CheckCircleIconOutline className={styles.icon} />
          )}
          <span>Watched</span>
        </button>
      </div>

      {isWatched && (
        <div className={styles.ratingButtons}>
          {Array.from({ length: 10 }).map((_, index) => {
            return (
              <button
                key={index}
                type="button"
                onClick={() => setRating(movie.id, index + 1)}
                className={styles.starButton}
              >
                {index < userRating ? (
                  <StarIconSolid
                    className={`${styles.starIcon} ${styles.solid}`}
                  />
                ) : (
                  <StarIconOutline className={styles.starIcon} />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
