"use client";

import { useCollectionStore } from "@/store/useCollectionStore";
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
import ActionButton from "./ActionButton";
import styles from "./movieActions.module.css";

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

  const userRating = useCollectionStore((s) => s.watched[movie.id]?.rating);
  const setRating = useCollectionStore((s) => s.setRating);

  const isHydrated = useHydrated();

  return (
    <div className={styles.movieActions}>
      <div className={styles.buttons}>
        <ActionButton
          variant="favorite"
          isActive={isFavorite}
          icon={isFavorite ? HeartIconSolid : HeartIconOutline}
          label="Favorite"
          onClick={() => toggleFavorite(movie)}
        />
        <ActionButton
          variant="watchlist"
          isActive={isWatchLater}
          icon={isWatchLater ? ClockIconSolid : ClockIconOutline}
          label="Watch Later"
          onClick={() => toggleWatchLater(movie)}
        />
        <ActionButton
          variant="watched"
          isActive={isWatched}
          icon={isWatched ? CheckCircleIconSolid : CheckCircleIconOutline}
          label="Watched"
          onClick={() =>
            isWatched ? unmarkWatched(movie.id) : markAsWatched(movie)
          }
        />
      </div>

      {isHydrated && isWatched && (
        <div className={styles.ratingButtons}>
          {Array.from({ length: 10 }).map((_, index) => {
            const isActive = index < userRating;
            const Icon = isActive ? StarIconSolid : StarIconOutline;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setRating(movie.id, index + 1)}
                className={styles.starButton}
              >
                <Icon
                  className={`${styles.starIcon} ${isActive ? styles.solid : ""}`}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
