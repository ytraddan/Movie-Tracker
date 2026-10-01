import { IMAGE_SIZES } from "@/lib/constants";
import { type MovieDetails } from "@/lib/tmdb-types";
import {
  getCountries,
  getDirectors,
  getImageUrl,
  getLanguage,
  getMoney,
  getOverview,
} from "@/lib/utils";
import styles from "./movieDetails.module.css";
import MovieMeta from "./MovieMeta";
import MovieActions from "../movieActions/MovieActions";
import BackButton from "@/components/backButton/BackButton";
import ImageWithFallback from "../imageWithFallback/ImageWithFallback";

interface MovieDetailsProps {
  movie: MovieDetails;
}

export default function MovieDetails({ movie }: MovieDetailsProps) {
  const posterUrl = getImageUrl(movie.poster_path, IMAGE_SIZES.poster.lg);
  const backdropUrl = getImageUrl(
    movie.backdrop_path,
    IMAGE_SIZES.backdrop.original,
  );
  const overview = getOverview(movie.overview);
  const directors = getDirectors(movie.credits.crew);
  const countries = getCountries(movie.production_countries);

  const facts = [
    {
      label: directors.includes(",") ? "Directors" : "Director",
      value: directors,
    },
    { label: "Original language", value: getLanguage(movie.original_language) },
    { label: "Budget", value: getMoney(movie.budget) },
    { label: "Revenue", value: getMoney(movie.revenue) },
    {
      label: countries.includes(",") ? "Countries" : "Country",
      value: countries,
    },
  ];

  return (
    <div className={styles.hero}>
      <div className={styles.backdropWrapper}>
        <ImageWithFallback
          fallback="/backdrop-fallback.png"
          className={styles.backdropImage}
          src={backdropUrl}
          alt=""
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
            alt=""
            width={320}
            height={480}
          />

          <div className={styles.metaWrapper}>
            <MovieMeta movie={movie} />
            <MovieActions movie={movie} />
            <section className={styles.overview}>
              <h2 className={styles.overviewTitle}>Overview</h2>
              <p className={styles.overviewText}>{overview}</p>
            </section>
            <dl className={styles.facts}>
              {facts.map((fact) => (
                <div key={fact.label} className={styles.fact}>
                  <dt>{fact.label}</dt>
                  <dd className={styles.value}>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
