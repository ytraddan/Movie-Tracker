"use client";

import { StarIcon } from "@heroicons/react/16/solid";
import styles from "./ratingBadges.module.css";
import { useCollectionStore } from "@/store/useCollectionStore";
import useHydrated from "@/hooks/useHydrated";

interface RatingBadgesProps {
  rating: string;
  id: number;
}

export default function RatingBadges({ id, rating }: RatingBadgesProps) {
  const userRating = useCollectionStore((s) => s.watched[id]?.rating);
  const isHydrated = useHydrated();

  return (
    <div className={styles.badges}>
      {rating !== "—" && (
        <div className={styles.ratingBadge}>
          <StarIcon className={styles.ratingIcon} aria-hidden="true" />
          <span className={styles.ratingNumber} aria-hidden="true">
            {rating}
          </span>
          <span className="sr-only">Rating: {rating} out of 10</span>
        </div>
      )}

      {isHydrated && userRating > 0 && (
        <div className={styles.ratingBadge}>
          <StarIcon className={styles.userRatingIcon} aria-hidden="true" />
          <span className={styles.ratingNumber} aria-hidden="true">
            {userRating}.0
          </span>
          <span className="sr-only">My rating: {userRating} out of 10</span>
        </div>
      )}
    </div>
  );
}
