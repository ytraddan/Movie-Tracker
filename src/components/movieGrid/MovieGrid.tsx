import { Movie } from "@/lib/tmdb-types";
import MovieCard from "@/components/movieCard/MovieCard";
import styles from "./movieGrid.module.css";

export default function MovieGrid({ movies }: { movies: Movie[] }) {
  return (
    <ul className={styles.movieGrid}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}
