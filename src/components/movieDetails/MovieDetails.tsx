import { IMAGE_SIZES } from "@/lib/constants";
import { type MovieDetails } from "@/lib/tmdb-types";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";
import styles from "./movieDetails.module.css";
import CastList from "./CastList";
import MovieMeta from "./MovieMeta";
import MovieActions from "../movieActions/MovieActions";

interface MovieDetailsProps {
  movie: MovieDetails;
  castLimit: number;
}

export default function MovieDetails({ movie, castLimit }: MovieDetailsProps) {
  const posterUrl = getImageUrl(movie.poster_path, IMAGE_SIZES.poster.original);

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
        <div>
          <MovieMeta movie={movie} />
          <MovieActions />
        </div>
      </div>

      <section className={styles.description}>
        <h2 className={styles.descriptionTitle}>Decription</h2>
        <p className={styles.descriptionText}>{movie.overview}</p>
      </section>

      <CastList cast={movie.credits.cast} castLimit={castLimit} />
    </article>
  );
}
