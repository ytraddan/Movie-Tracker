import { Movie } from "@/lib/tmdb-types";
import MovieCard from "../movieCard/MovieCard";
import styles from "./trendingGrid.module.css";

export default function TrendingGrid({ movies }: { movies: Movie[] }) {
  return (
    <ul className={styles.trendingGrid}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}
