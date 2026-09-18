import { IMAGE_SIZES } from "@/lib/constants";
import { type MovieDetails } from "@/lib/tmdb-types";
import { getImageUrl } from "@/lib/utils";
import styles from "./movieDetails.module.css";
import CastList from "./CastList";
import MovieMeta from "./MovieMeta";
import MovieActions from "../movieActions/MovieActions";
import BackButton from "@/components/backButton/BackButton";
import ImageWithFallback from "../imageWithFallback/ImageWithFallback";

interface MovieDetailsProps {
  movie: MovieDetails;
  castLimit: number;
}

export default function MovieDetails({ movie, castLimit }: MovieDetailsProps) {
  const posterUrl = getImageUrl(movie.poster_path, IMAGE_SIZES.poster.original);
  const backdropUrl = getImageUrl(
    movie.backdrop_path,
    IMAGE_SIZES.backdrop.original,
  );

  return (
    <article className={styles.wrapper}>
      <div className={styles.hero}>
        <div className={styles.backdropWrapper}>
          <ImageWithFallback
            fallback="/backdrop-fallback.png"
            className={styles.backdropImage}
            src={backdropUrl}
            alt={movie.title}
            sizes="100vw"
            loading="eager"
            fill
          />
          <div className={styles.backdropOverlayLeft} />
          <div className={styles.backdropOverlayRight} />
          <div className={styles.backdropOverlayBottom} />
        </div>

        <BackButton />

        <div className={styles.heroContent}>
          <div className={styles.info}>
            <ImageWithFallback
              fallback="/poster-fallback.png"
              className={styles.poster}
              src={posterUrl}
              alt={movie.title}
              width={320}
              height={480}
            />

            <div className={styles.metaWrapper}>
              <MovieMeta movie={movie} />
              <MovieActions movie={movie} />
              <section className={styles.overview}>
                <h2 className={styles.overviewTitle}>Overview</h2>
                <p className={styles.overviewText}>{movie.overview}</p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <CastList cast={movie.credits.cast} limit={castLimit} />
    </article>
  );
}
