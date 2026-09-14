import { StarIcon } from "@heroicons/react/20/solid";
import { IMAGE_SIZES } from "@/lib/constants";
import { type MovieDetails } from "@/lib/tmdb-types";
import { getImageUrl } from "@/lib/utils";
import MovieGrid from "@/components/movieGrid/MovieGrid";
import Image from "next/image";
import styles from "./movieDetails.module.css";
import CastList from "./CastList";

interface MovieDetailsProps {
  movie: MovieDetails;
}

const SIMLAR_LIMIT = 10;

export default function MovieDetails({ movie }: MovieDetailsProps) {
  const posterUrl = getImageUrl(movie.poster_path, IMAGE_SIZES.poster.original);
  const releaseYear = movie.release_date.split("-")[0];

  const durationHours = Math.floor(movie.runtime / 60);
  const durationMinutes = movie.runtime % 60;

  const rating = movie.vote_average.toFixed(1);
  const voteCount = movie.vote_count.toLocaleString();

  const visibleSimilarMovies = movie.similar.results.slice(0, SIMLAR_LIMIT);

  return (
    <article className={styles.wrapper}>
      <div className={styles.info}>
        <Image
          src={posterUrl}
          alt={movie.title}
          width={320}
          height={480}
          className={styles.poster}
        />
        <div className={styles.meta}>
          <h1 className={styles.title}>{movie.title}</h1>
          <div className={styles.moreInfo}>
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
      </div>

      <div className={styles.description}>
        <h2 className={styles.descriptionTitle}>Decription</h2>
        <p className={styles.descriptionText}>{movie.overview}</p>
      </div>

      <CastList cast={movie.credits.cast} />

      <section className={styles.similar}>
        <h2>Similar Movies</h2>
        <MovieGrid movies={visibleSimilarMovies} />
      </section>
    </article>
  );
}
