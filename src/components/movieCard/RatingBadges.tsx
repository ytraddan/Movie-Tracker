"use client";

import { StarIcon } from "@heroicons/react/16/solid";
import styles from "./ratingBadges.module.css";
import { useCollectionStore } from "@/store/useCollectionStore";

interface RatingBadgesProps {
  rating: string;
  id: number;
}

export default function RatingBadges({ id, rating }: RatingBadgesProps) {
  const userRating = useCollectionStore((s) => s.watched[id]?.rating);

  return (
    <div className={styles.badges}>
      <div className={styles.ratingBadge}>
        <StarIcon className={styles.ratingIcon} />
        <span className={styles.ratingNumber}>{rating}</span>
      </div>

      {userRating > 0 && (
        <div className={styles.ratingBadge}>
          <StarIcon className={styles.userRatingIcon} />
          <span className={styles.ratingNumber}>{userRating}.0</span>
        </div>
      )}
    </div>
  );
}
