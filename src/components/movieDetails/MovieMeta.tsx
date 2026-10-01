import { MovieDetails } from "@/lib/tmdb-types";
import { StarIcon } from "@heroicons/react/20/solid";
import {
  getGenres,
  getRating,
  getReleaseYear,
  getRuntime,
  getVoteCount,
} from "@/lib/utils";
import styles from "./movieMeta.module.css";

interface MovieMetaProps {
  movie: MovieDetails;
}

export default function MovieMeta({ movie }: MovieMetaProps) {
  const releaseYear = getReleaseYear(movie.release_date);
  const runtime = getRuntime(movie.runtime);
  const rating = getRating(movie.vote_average);
  const voteCount = getVoteCount(movie.vote_count);
  const genres = getGenres(movie.genres);
  const hasOriginalTitle =
    movie.original_title && movie.original_title !== movie.title;

  return (
    <div className={styles.wrapper}>
      <h1>
        {movie.title}{" "}
        {hasOriginalTitle && (
          <span className={styles.originalTitle}>({movie.original_title})</span>
        )}
      </h1>

      {movie.tagline && <p className={styles.tagline}>{movie.tagline}</p>}
      <div className={styles.meta}>
        {releaseYear && (
          <>
            <span>{releaseYear}</span>
            {"·"}
          </>
        )}
        {runtime && (
          <>
            <span>{runtime}</span>
            {"·"}
          </>
        )}
        <span>{genres}</span>
      </div>
      <div className={styles.rating}>
        <StarIcon className={styles.starIcon} aria-hidden="true" />
        <span
          className={styles.ratingNumber}
          aria-label={`Rating: ${rating} out of 10`}
        >
          {rating}
        </span>
        <span className={styles.voteCount}>{voteCount}</span>
      </div>
    </div>
  );
}
