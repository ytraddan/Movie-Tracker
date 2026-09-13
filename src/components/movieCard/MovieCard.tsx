import { IMAGE_SIZES, TMDB_IMAGE_BASE_URL } from "@/lib/constants";
import { Movie } from "@/lib/tmdb-types";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/16/solid";
import styles from "./movieCard.module.css";

export default function MovieCard(movie: Movie) {
  const posterUrl = `${TMDB_IMAGE_BASE_URL}/${IMAGE_SIZES.poster.md}${movie.poster_path}`;
  const releaseDate = movie.release_date.split("-")[0];
  const rating = movie.vote_average.toFixed(1);

  return (
    <div className={styles.movieCard}>
      <Image
        loading="lazy"
        alt={movie.title}
        src={posterUrl}
        width={240}
        height={360}
        className={styles.moviePoster}
      />
      <p className={styles.description}>
        <span className={styles.title}>{movie.title}</span>
        <span className={styles.releaseDate}>{releaseDate}</span>
      </p>
      <div className={styles.ratingBadge}>
        <StarIcon className={styles.ratingIcon} />
        <span className={styles.ratingNumber}>{rating}</span>
      </div>
    </div>
  );
}
