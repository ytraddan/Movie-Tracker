import { fetchSimilarMovies } from "@/lib/tmdb";
import MovieCard from "../movieCard/MovieCard";
import styles from "./similarMovies.module.css";

interface SimlarMoviesProps {
  movieId: string;
  similarLimit: number;
}

export default async function SimlarMovies({
  movieId,
  similarLimit,
}: SimlarMoviesProps) {
  const { results: similarMovies } = await fetchSimilarMovies(movieId);

  const visibleSimilarMovies = similarMovies.slice(0, similarLimit);

  if (visibleSimilarMovies.length == 0) {
    return null;
  }

  return (
    <section className={styles.similar}>
      <h2 className={styles.similarTitle}>Similar Movies</h2>
      <ul className={styles.similarList}>
        {visibleSimilarMovies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
}
