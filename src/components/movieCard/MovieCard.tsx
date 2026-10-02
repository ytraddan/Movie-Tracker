import { IMAGE_SIZES } from "@/lib/constants";
import { Movie } from "@/lib/tmdb-types";
import { getImageUrl, getRating, getReleaseYear } from "@/lib/utils";
import Link from "next/link";
import styles from "./movieCard.module.css";
import FavoriteButton from "./FavoriteButton";
import RatingBadges from "./RatingBadges";
import ImageWithFallback from "../imageWithFallback/ImageWithFallback";
import MovieHoverPreview from "./MovieHoverPreview";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const posterUrl = getImageUrl(movie.poster_path, IMAGE_SIZES.poster.md);
  const releaseYear = getReleaseYear(movie.release_date);
  const rating = getRating(movie.vote_average);

  return (
    <MovieHoverPreview movie={movie}>
      <div className={styles.movieCard}>
        <Link
          href={`/movie/${movie.id}`}
          className={styles.cardLink}
          aria-label={movie.title}
        />

        <FavoriteButton movie={movie} />

        <RatingBadges id={movie.id} rating={rating} />

        <ImageWithFallback
          fallback="/poster-fallback.png"
          alt=""
          src={posterUrl}
          width={240}
          height={360}
          className={styles.poster}
          loading="eager"
        />
        <div className={styles.description}>
          <h3 className={styles.title}>{movie.title}</h3>
          <span className={styles.releaseYear}>{releaseYear}</span>
        </div>
      </div>
    </MovieHoverPreview>
  );
}
