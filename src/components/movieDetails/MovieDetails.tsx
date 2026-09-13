import { IMAGE_SIZES } from "@/lib/constants";
import { type MovieDetails } from "@/lib/tmdb-types";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";
import styles from "./movieDetails.module.css";
import { StarIcon } from "@heroicons/react/24/solid";
import TrendingGrid from "../trendingGrid/TrendingGrid";

interface MovieDetailsProps {
  movie: MovieDetails;
}

const CAST_LIMIT = 8;
const SIMLAR_LIMIT = 5;

export default function MovieDetails({ movie }: MovieDetailsProps) {
  const posterUrl = getImageUrl(movie.poster_path, IMAGE_SIZES.poster.original);
  const releaseYear = movie.release_date.split("-")[0];
  const durationHours = Math.floor(movie.runtime / 60);
  const durationMinutes = movie.runtime % 60;
  const visibleCast = movie.credits.cast.slice(0, CAST_LIMIT);
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
          <div className={styles.releaseRuntimeGenres}>
            <span className={styles.releaseYear}>{releaseYear}</span>
            <span className={styles.runtime}>
              {durationHours} hours {durationMinutes} minutes
            </span>
            <ul className={styles.genres}>
              {movie.genres.map((genre) => (
                <li className={styles.genre} key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.rating}>
            <StarIcon height={24} className={styles.starIcon} />
            <span>{movie.vote_average}</span>
            <span>{movie.vote_count}</span>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <h2 className={styles.title}>Decription</h2>
        <p>{movie.overview}</p>
      </div>
      <section className={styles.cast}>
        <h2 className={styles.castTitle}>Cast</h2>
        <ul className={styles.castList}>
          {visibleCast.map((member) => (
            <li className={styles.castMember} key={member.id}>
              <Image
                src={getImageUrl(member.profile_path, IMAGE_SIZES.poster.lg)}
                className={styles.castMemberImage}
                height={170}
                width={170}
                alt={member.name}
              />
              <span className={styles.castMemberName}>{member.name}</span>
              <span className={styles.castMemberCharacter}>
                {member.character}
              </span>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.similar}>
        <h2>Similar</h2>
        <TrendingGrid movies={visibleSimilarMovies} />
      </section>
    </article>
  );
}
