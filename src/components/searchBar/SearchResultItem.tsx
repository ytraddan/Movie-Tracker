import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/lib/tmdb-types";
import { StarIcon } from "@heroicons/react/20/solid";
import { IMAGE_SIZES } from "@/lib/constants";
import { getImageUrl } from "@/lib/utils";
import styles from "./searchResultItem.module.css";

interface SearchResultItem {
  movie: Movie;
}

export default function SearchResultItem({ movie }: SearchResultItem) {
  const posterUrl = getImageUrl(movie.poster_path, IMAGE_SIZES.poster.sm);
  const releaseYear = movie.release_date.split("-")[0];
  const rating = movie.vote_average.toFixed(1);

  return (
    <Link className={styles.movie} href={`/movie/${movie.id}`}>
      <Image
        height={84}
        width={56}
        alt={movie.title}
        src={posterUrl}
        className={styles.poster}
      />
      <div className={styles.info}>
        <span className={styles.title}>{movie.title}</span>
        <div className={styles.meta}>
          <div className={styles.rating}>
            <StarIcon className={styles.starIcon} />
            <span>{rating}</span>
          </div>{" "}
          {"·"}
          <span className={styles.releaseDate}>{releaseYear}</span>
        </div>
        <p className={styles.overview}>{movie.overview}</p>
      </div>
    </Link>
  );
}
