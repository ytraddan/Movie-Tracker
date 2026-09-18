import { fetchSimilarMovies } from "@/lib/tmdb";
import MovieCard from "../movieCard/MovieCard";
import styles from "./similarMovies.module.css";

interface SimlarMoviesProps {
  movieId: string;
  limit: number;
}

export default async function SimlarMovies({
  movieId,
  limit,
}: SimlarMoviesProps) {
  const { results: similarMovies } = await fetchSimilarMovies(movieId);

  const visibleMovies = similarMovies.slice(0, limit);

  if (visibleMovies.length == 0) {
    return null;
  }

  return (
    <section className={styles.similar}>
      <h2 className={styles.similarTitle}>Similar Movies</h2>
      <ul className={styles.similarList}>
        {visibleMovies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
}
