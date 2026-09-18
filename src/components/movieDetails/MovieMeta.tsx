import { MovieDetails } from "@/lib/tmdb-types";
import { StarIcon } from "@heroicons/react/20/solid";
import styles from "./movieMeta.module.css";
import {
  getRating,
  getReleaseYear,
  getRuntime,
  getVoteCount,
} from "@/lib/utils";

interface MovieMetaProps {
  movie: MovieDetails;
}

export default function MovieMeta({ movie }: MovieMetaProps) {
  const releaseYear = getReleaseYear(movie.release_date);
  const runtime = getRuntime(movie.runtime);
  const rating = getRating(movie.vote_average);
  const voteCount = getVoteCount(movie.vote_count);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{movie.title}</h1>
      <div className={styles.meta}>
        <span className={styles.releaseYear}>{releaseYear}</span>
        {"·"}
        <span className={styles.runtime}>{runtime}</span>
        {"·"}
        <ul className={styles.genres}>
          {movie.genres.map((genre, index, genres) => (
            <li className={styles.genre} key={genre.id}>
              {genre.name}
              {index != genres.length - 1 && ","}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.rating}>
        <StarIcon className={styles.starIcon} />
        <span className={styles.ratingNumber}>{rating}</span>
        <span className={styles.voteCount}>{voteCount}</span>
      </div>
    </div>
  );
}
