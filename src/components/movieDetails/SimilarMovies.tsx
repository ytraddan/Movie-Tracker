import { fetchSimilarMovies } from "@/lib/tmdb";
import MovieCard from "../movieCard/MovieCard";
import scrollStyles from "@/styles/scrollSection.module.css";

interface SimilarMoviesProps {
  movieId: string;
  limit: number;
}

export default async function SimilarMovies({
  movieId,
  limit,
}: SimilarMoviesProps) {
  const { results: similarMovies } = await fetchSimilarMovies(movieId);

  const visibleMovies = similarMovies.slice(0, limit);

  if (visibleMovies.length == 0) {
    return null;
  }

  return (
    <section className={scrollStyles.scrollSection}>
      <h2>Similar Movies</h2>
      <ul>
        {visibleMovies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
}
