import { IMAGE_SIZES, TMDB_IMAGE_BASE_URL } from "@/lib/constants";
import { Movie } from "@/lib/tmdb-types";
import Image from "next/image";
import styles from "./movieCard.module.css";

export default function MovieCard(movie: Movie) {
  const posterUrl = `${TMDB_IMAGE_BASE_URL}/${IMAGE_SIZES.poster.md}${movie.poster_path}`;

  return (
    <>
      <Image
        loading="lazy"
        alt={movie.title}
        src={posterUrl}
        width={240}
        height={360}
      />
      <p className={styles.p}>
        <span>{movie.title}</span>
        <span>{movie.release_date}</span>
        <span>{movie.vote_average}</span>
      </p>
    </>
  );
}
