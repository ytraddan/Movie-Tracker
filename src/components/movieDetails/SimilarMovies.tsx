import MovieGrid from "@/components/movieGrid/MovieGrid";
import styles from "./similarMovies.module.css";
import { fetchSimilarMovies } from "@/lib/tmdb";

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
      <MovieGrid movies={visibleSimilarMovies} />
    </section>
  );
}
