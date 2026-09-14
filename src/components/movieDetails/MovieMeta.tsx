import { MovieDetails } from "@/lib/tmdb-types";
import { StarIcon } from "@heroicons/react/20/solid";
import styles from "./movieMeta.module.css";

interface MovieMetaProps {
  movie: MovieDetails;
}

export default function MovieMeta({ movie }: MovieMetaProps) {
  const releaseYear = movie.release_date.split("-")[0];

  const durationHours = Math.floor(movie.runtime / 60);
  const durationMinutes = movie.runtime % 60;

  const rating = movie.vote_average.toFixed(1);
  const voteCount = movie.vote_count.toLocaleString();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{movie.title}</h1>
      <div className={styles.meta}>
        <span className={styles.releaseYear}>{releaseYear}</span>
        {"·"}
        <span className={styles.runtime}>
          {durationHours}h {durationMinutes}m
        </span>
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
        <span className={styles.voteCount}>{voteCount} ratings</span>
      </div>
    </div>
  );
}
