import { IMAGE_SIZES } from "@/lib/constants";
import { Movie } from "@/lib/tmdb-types";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/16/solid";
import styles from "./movieCard.module.css";
import Link from "next/link";
import { getImageUrl } from "@/lib/utils";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const posterUrl = getImageUrl(movie.poster_path, IMAGE_SIZES.poster.lg);
  const releaseYear = movie.release_date.split("-")[0];
  const rating = movie.vote_average.toFixed(1);

  return (
    <Link href={`/movie/${movie.id}`} className={styles.movieCard}>
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
      <div className={styles.ratingBadge}>
        <StarIcon className={styles.ratingIcon} />
        <span className={styles.ratingNumber}>{rating}</span>
      </div>
    </Link>
  );
}
