import styles from "./movieActions.module.css";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function MovieActions() {
  return (
    <div className={styles.movieActions}>
      <button type="button" className={`${styles.button} ${styles.favorite}`}>
        <HeartIcon className={styles.icon} />
        <span>Add to Favorites</span>
      </button>
      <button type="button" className={`${styles.button} ${styles.watchlist}`}>
        <ClockIcon className={styles.icon} />
        <span>Watch Later</span>
      </button>
      <button type="button" className={`${styles.button} ${styles.watched}`}>
        <CheckCircleIcon className={styles.icon} />
        <span>Watched</span>
      </button>
    </div>
  );
}
