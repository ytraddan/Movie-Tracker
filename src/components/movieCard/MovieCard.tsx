import { IMAGE_SIZES } from "@/lib/constants";
import { Movie } from "@/lib/tmdb-types";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import styles from "./movieCard.module.css";
import FavoriteButton from "./FavoriteButton";
import RatingBadges from "./RatingBadges";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const posterUrl = getImageUrl(movie.poster_path, IMAGE_SIZES.poster.lg);
  const releaseYear = movie.release_date.split("-")[0];
  const rating = movie.vote_average.toFixed(1);

  return (
    <Link href={`/movie/${movie.id}`} className={styles.movieCard}>
      <FavoriteButton movie={movie} />

      <RatingBadges id={movie.id} rating={rating} />

      <Image
        loading="lazy"
        alt={movie.title}
        src={posterUrl}
        width={240}
        height={360}
        className={styles.poster}
      />
      <p className={styles.description}>
        <span className={styles.title}>{movie.title}</span>
        <span className={styles.releaseYear}>{releaseYear}</span>
      </p>
    </Link>
  );
}
