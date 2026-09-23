import { IMAGE_SIZES } from "@/lib/constants";
import { Movie } from "@/lib/tmdb-types";
import { getImageUrl, getRating, getReleaseYear } from "@/lib/utils";
import Link from "next/link";
import styles from "./movieCard.module.css";
import FavoriteButton from "./FavoriteButton";
import RatingBadges from "./RatingBadges";
import ImageWithFallback from "../imageWithFallback/ImageWithFallback";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const posterUrl = getImageUrl(movie.poster_path, IMAGE_SIZES.poster.lg);
  const releaseYear = getReleaseYear(movie.release_date);
  const rating = getRating(movie.vote_average);

  return (
    <Link href={`/movie/${movie.id}`} className={styles.movieCard}>
      <FavoriteButton movie={movie} />

      <RatingBadges id={movie.id} rating={rating} />

      <ImageWithFallback
        fallback="/poster-fallback.png"
        alt={movie.title}
        src={posterUrl}
        width={240}
        height={360}
        className={styles.poster}
        loading="eager"
      />
      <p className={styles.description}>
        <span className={styles.title}>{movie.title}</span>
        <span className={styles.releaseYear}>{releaseYear}</span>
      </p>
    </Link>
  );
}
