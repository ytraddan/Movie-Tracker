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

  return (
    <div className={styles.wrapper}>
      <h1>{movie.title}</h1>
      <div className={styles.meta}>
        <span>{releaseYear}</span>
        {"·"}
        <span>{runtime}</span>
        {"·"}
        <span>{genres}</span>
      </div>
      <div className={styles.rating}>
        <StarIcon className={styles.starIcon} />
        <span className={styles.ratingNumber}>{rating}</span>
        <span className={styles.voteCount}>{voteCount}</span>
      </div>
    </div>
  );
}
